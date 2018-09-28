const express = require('express')
var bodyParser = require("body-parser");
const app = express()
const port = 3000

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json

app.use(bodyParser.json())
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/test',function(req,res){
  console.log("Yoooooo");
  console.log(req.headers);
  console.log(req.body);
  res.status(200).send("yay");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
