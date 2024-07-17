const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env['mysqlpass']
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    query_db(con)
});

function query_db(conn){
    sql = 'show databases'
    conn.query(sql,(err, res) => {
        if(err){
            console.log(err.sqlMessage)
        }else{
            console.log(res)
        }
    })
}