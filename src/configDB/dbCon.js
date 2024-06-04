//Archivo que se ocupa del manejo de conexiones a la base de datos

const mysql = require("mysql2");

let poolConnection = mysql.createPool({
  connectionLimit: 50,
  host: "localhost",
  user: "root",
  password: "",
  database: "lab2db", //Base de datos de testeo
});


module.exports = poolConnection;