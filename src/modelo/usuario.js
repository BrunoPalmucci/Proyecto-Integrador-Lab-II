import Persona from "./persona.js";

// Definición de la clase Usuario que hereda de Persona
class Usuario extends Persona {
  constructor(
    id_usuario,
    password,
    genero,
    fecha_de_nacimiento,
    domicilio,
    dni,
    apellido,
    nombre,
    cuil,
    email
  ) {
    super(
      genero,
      fecha_de_nacimiento,
      domicilio,
      dni,
      apellido,
      nombre,
      cuil,
      email
    );
    this._id_usuario = id_usuario;
    this._password = password;
  }

  // Getters
  get id_usuario() {
    return this._id_usuario;
  }

  get password() {
    return this._password;
  }

  // Setters
  set id_usuario(value) {
    this._id_usuario = value;
  }

  set password(value) {
    this._password = value;
  }

  
}

module.exports = Usuario;
