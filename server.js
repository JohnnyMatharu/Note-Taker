const express = require('express')
const path = require('path');
const app = express()
const port = process.env.PORT || 8080;

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
  console.log("hello");
  
  })
//POST route
//'/api/notes'


//DELETE
  app.delete('/api/notes/:id', function (req, res) {
    console.log(req.params);
  
  })

app.listen(port);
console.log('Server started at http://localhost:' + port);







//https://expressjs.com/en/guide/routing.html
//first page: http://localhost:8080, second page: http://localhost:8080/notes
//have to insert all operation expected in notes here, check mock for demo or Monday video, show to bcs to get tips how, tutor, office hours
