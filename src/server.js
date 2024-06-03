const express = require("express");
const app = express();
const router = express.Router();

app.get("/", (req, res) => {
  res.render("index.pug");
});

const mysql = require("mysql2");

let poolConnection = mysql.createPool({
  connectionLimit: 50,
  host: "localhost",
  user: "root",
  password: "",
  database: "dbtest", //Base de datos de testeo
});

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbtest",
  port: 3306,
});


//CONEXIONES
/*poolConnection.connect(function(err){
  if (err) throw err;
  console.log("Conectado!")
  let sql = ""
})*/

/*con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  ``;
  var sql =
    "INSERT INTO paciente (nombre, apellido, dni) VALUES('Bruno', 'Palmucci', 45786594)";
  poolConnection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(
      `${result.affectedRows} paciente${result == 1 ? "s" : ""} insertado${
        result == 1 ? "s" : ""
      }`
    );
  });
});*/

let port = 3000;
app.listen(port, () => {
  console.log(
    `Servidor inicializado en el puerto ${port} (http://localhost:3000/)`
  );
});

//Para recordar: Usar node --watch server.js (Es lo mismo que nodemon)

/* |\---/|
   | ,_, |
    \_`_/-..----.
 ___/ `   ' ,""+ \  sk
(__...'   __\    |`.___.';
  (_,...'(_,.`__)/'.....+
*/
