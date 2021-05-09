const fs = require('fs');
const express = require('express')
const path = require('path');
const app = express()
const port = process.env.PORT || 8080;
const { db } = require('./Develop/db/db.json');

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



app.post('/api/notes',(req,res)=>{
console.log (req.body)
  fs.readFile("./Develop/db/db.json", (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    notes.push(req.body);
console.log(notes);

  fs.writeFile("./Develop/db/db.json", JSON.stringify(notes), function (err) {
    res.json(notes);
    if (err) {
    console.log(err);
    }
});
});
})



//DELETE
  app.delete('/api/notes/:id', function (req, res) {
    console.log(req.params.id);
    const params = [req.params.id];
    res.json({
      message: 'deleted',
      changes: result.affectedRows,
      id: req.params.id
    });
  })


app.listen(port);
console.log('Server started at http://localhost:' + port);



//https://expressjs.com/en/guide/routing.html
//first page: http://localhost:8080, second page: http://localhost:8080/notes
//have to insert all operation expected in notes here, check mock for demo or Monday video, show to bcs to get tips how, tutor, office hours
