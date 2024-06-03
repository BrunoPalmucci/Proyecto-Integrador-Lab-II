import Usuario from "./usuario.js";

// Definición de la clase Administrador que hereda de Usuario
class Administrador extends Usuario {
  constructor(
    id_administrador,
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
    );
    this._id_administrador = id_administrador;
  }

  // Getters
  get id_administrador() {
    return this._id_administrador;
  }

  // Setters
  set id_administrador(value) {
    this._id_administrador = value;
  }

  mostrarInformacion() {
    return `
        ID Administrador: ${this._id_administrador}
        ${super.mostrarInformacion()}
        `;
  }
}

module.exports = Administrador;
