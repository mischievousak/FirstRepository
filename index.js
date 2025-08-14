const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'apurva345',
    database: '23BE0344'
});
console.log('Connected to MYSQL Database!');

connection.query(
  'SELECT * FROM `instructor`',
  function(err, results, fields) {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log('Query results:', results); // results contains rows returned by server
    console.log('Fields:', fields); // fields contains extra meta data about results
  }
);

connection.end(err => {
  if (err) {
    console.error('Error closing connection:', err);
    return;
  }
  console.log('Connection closed successfully.');

});
