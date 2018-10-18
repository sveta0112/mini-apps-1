const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/index.js');
const path = require('path');
const app = express();


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/public')));


// app.get('',function(req, res){
//   db.getAll((err, results) => {
//     if(err){
//     	res.status(500).send();
//     }else{
//     	res.send(results);
//     }
//   });
// });

app.post('/userInfo',function(req, res){
  db.insertOne(req.body.name, req.body.email, req.body.password, req.body.line_1, req.body.line_2, req.body.city, req.body.state, req.body.zip_code, req.body.credit_card_num, req.body.expiry_date, req.body.cvv, req.body.billing,(err, result) => {
  	if(err){
  	  res.status(500).send();
  	}else{
  		res.send(result);
  	}
  });
});



app.listen(3000, () => { 
  console.log('listening on port', 3000)
});