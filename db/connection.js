var db = require('mysql');
var dbCred = require('../db_creds.json');
var connection = db.createConnection(dbCred);

connection.connect(function(err){
  if (err) throw err;
  console.log('Connected..');
});

module.exports = connection;
