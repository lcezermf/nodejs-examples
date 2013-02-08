var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user:'root',
	password: 'serviceweb',
	database: 'nodejs'
});

connection.connect();

/* passivel de SQL INJECTION
connection.query("INSERT INTO customers (name, age) VALUES ('Cezinha', 22)");
connection.query("INSERT INTO customers (name, age) VALUES ('Gabriela', 17)");
connection.query("INSERT INTO customers (name, age) VALUES ('James', 22)");
*/


/*
connection.query("INSERT INTO customers (name, age) VALUES ('James', 22)", function(erro, info) {
	console.log(erro);
	console.log(info);
});
*/

/* previne injection, similar ao rails
connection.query("INSERT INTO customers (name, age) VALUES (?, ?)", ['Luiz Cezer', 23], function(erro, info){
	console.log(erro);
	console.log(info);
})
*/

/*
connection.query('SELECT * FROM customers', function(err, rows, fiels) {
  if(err) throw err;
  
  rows.forEach(function(row) {
  	console.log('nome : ' + row.name);
  	console.log('age : ' + row.age);
  	console.log('---\n')
  })

  //console.log(rows);
  //console.log(fiels);
});
*/

/* SELECT COM WHERE
connection.query('SELECT * FROM customers WHERE id = ?', [1], function(err, rows, fiels) {
  if(err) throw err;
  
  rows.forEach(function(row) {
  	console.log('nome : ' + row.name);
  	console.log('age : ' + row.age);
  	console.log('---\n')
  })

});

*/

/* UPDATE 
connection.query('UPDATE customers SET name = ? WHERE id = ?', ['Hetfield', 3], function(err, info){
	console.log(err);
	console.log(info);
});
*/
//connection.query('SELECT * FROM customers SET nome = ? WHERE id = ?', ['Hetfield', 3]);

//DELETE
connection.query('DELETE FROM customers WHERE id = ?', [3], function(err, info){
  console.log(err);
  console.log(info);
});



connection.end();