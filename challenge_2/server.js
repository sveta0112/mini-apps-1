const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
var convertCSV = require('./client/app.js');
var fs = require('fs');
const app = express();
const path = require('path');
app.use(multer().single('text'));

app.use(express.static('client'));

app.post('/form', function(req, res){
  var dats = JSON.parse(req.file.buffer.toString()); 
  dats = convertCSV(dats);
  console.log (dats);
  res.send(dats );
});

app.listen(3000,function(){
  console.log('Express server started at port 3000');
});
