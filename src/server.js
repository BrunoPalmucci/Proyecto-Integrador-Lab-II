const express = require("express");
const app = express();
const path = require("path");


app.get("/", (req, res) => {
  res.render("index.pug");
});

let persona = require("./routes/persona.js")

app.use(express.json());

app.use("/persona", persona)



app.use(express.static(path.join(__dirname, 'public')));


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
