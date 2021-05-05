const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
//const port = 3000

//app.get('/', (req, res) => {
  //res.send('Hello World!')
//})

//app.listen(port, () => {
  //console.log(`Example app listening at http://localhost:${port}`)
//})

// sendFile will go here



// sendFile will go here

app.listen(port);
console.log('Server started at http://localhost:' + port);

