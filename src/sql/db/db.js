const mysql = require("mysql2")

const pool=mysql.createPool({
    host: "localhost",
    port: "3306",
    user:"root",
    password:"",
    database:"lets_try",
    connectionLimit:10
});
pool.getConnection((err,connection)=>{
    if(err) throw err;
    console.log(`connected to Mysql DB successfully!`);
    connection.release();
})
module.exports=pool;