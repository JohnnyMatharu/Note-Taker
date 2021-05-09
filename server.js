const fs = require('fs');
const express = require('express')
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const { db } = require('./Develop/db/db.json');
const { v4: uuidv4 } = require('uuid');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Develop/public"));
console.log(__dirname);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});
//html front end routes
app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
  });


//GET
app.get('/api/notes',(req,res)=>{
  fs.readFile("./Develop/db/db.json", (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    res.json(notes);
    console.log(notes);

});
});



app.post('/api/notes', (req, res) => {
  console.log('req.body in POST /api/notes', req.body);
  // Add a unique id to the note using uuid package
  const newNote = { title: req.body.title, text: req.body.text, id: uuidv4() };
  console.log('newNote with id', newNote);
  fs.readFile('./Develop/db/db.json', (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
   
    notes.push(newNote);
  

    fs.writeFile('./Develop/db/db.json', JSON.stringify(notes), function (err) {
      res.json(notes);
      if (err) {
        console.log(err);
      }
    });
  });
});


//let bigCities = cities.filter(function (e) {
  //return e.population > 3000000;
//});
//console.log(bigCities);


//DELETE
app.delete('/api/notes/:id', function (req, res) {
  fs.readFile("./Develop/db/db.json", (err, data) => {
    if (err) throw err;
    const notesArr = JSON.parse(data);
    console.log(notesArr, 'this is test1');

  console.log(req.params.id, 'this is test 2');
   const params = req.params.id;
   console.log(params, 'this is test 3');
  const filterArray = notesArr.filter((item) => item.id !== params);
console.log(filterArray, 'this is test 4')

res.json(filterArray);

fs.writeFile('./Develop/db/db.json', JSON.stringify(filterArray), function (err) {

  if (err) {
    console.log(err);
  }
//res.json({
  //   message: 'deleted',
    // changes: result.affectedRows,
   // id: req.params.id

//});

});  
});
});


app.listen(port);
console.log('Server started at http://localhost:' + port);



//https://expressjs.com/en/guide/routing.html
//first page: http://localhost:8080, second page: http://localhost:8080/notes
//have to insert all operation expected in notes here, check mock for demo or Monday video, show to bcs to get tips how, tutor, office hours
