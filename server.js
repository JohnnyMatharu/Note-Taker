const express = require('express')
const path = require('path');
const app = express()
const port = process.env.PORT || 8080;


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);

//first page: http://localhost:8080, second page: http://localhost:8080/notes
