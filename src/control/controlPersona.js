const Persona = require("../modelo/persona.js");
//CREATE

exports.crearPersona = function (req, res) {
  let objetoPersona = {
    fecha_de_nacimiento: req.body.fechaNacimiento,
    domicilio: req.body.domicilio,
    dni: req.body.documento,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    genero: req.body.genero,
    cuil: req.body.cuil,
    email: req.body.email,
  };
  Persona.create(objetoPersona, function(err, result) {
    if (err) {
      console.error(err);
      res.status(500).send('Error interno del servidor');
    } else {
      res.send(result);
    }
  });
};
