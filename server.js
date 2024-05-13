const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.render("index.pug") 
});


let port = 3000
app.listen(port, () => {
    console.log(`Servidor inicializado en el puerto ${port} (http://localhost:3000/)`)
})