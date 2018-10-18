//some yhing
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'lana',
  password: 'lana1234',
  database : 'shopping_cart'
});



var getAll = function(callback) {
  console.log('getall 1')
  connection.query('select * from userInfo', function (error, results, fields) {
    console.log('getall 2')
    if (error) {
      callback(error,null);
    } else{
      callback(null, results);
    }
   

  });
};


var insertOne = function(username, email, password, line_1, line_2, city, state, zip_code, credit_card_num, expiry_date, cvv, billing, callback) {
  
  const query = `INSERT INTO userInfo (username, email, password, line_1, line_2, city, state, zip_code, credit_card_num, expiry_date, cvv, billing) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  console.log(query);
  connection.query(query, [username, email, password, line_1, line_2, city, state, zip_code, credit_card_num, expiry_date, cvv, billing], function (error, results, fields) {
    callback(error, null);
  });
};





module.exports.getAll = getAll;
module.exports.insertOne = insertOne;

