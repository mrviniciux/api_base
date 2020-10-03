const mysql      = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'aloisk',
  database : 'financial_control'
});


const createTable = (conn) =>  {

    const sql = `CREATE TABLE IF NOT EXISTS Clientes (
                ID int NOT NULL AUTO_INCREMENT,
                Nome varchar(150) NOT NULL,
                CPF char(11) NOT NULL,
                PRIMARY KEY (ID)
                )`;
    
    conn.query(sql, function (error, results, fields){
        if(error) return console.log(error);
        console.log('criou a tabela!');
    });
}

connection.connect( (err) => {
    if(err) return console.log(err);
    console.log('conectou!');
    createTable(connection);
})

