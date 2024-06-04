const con = require("../configDB/dbCon.js");
class Persona {
  constructor(
    genero,
    fecha_de_nacimiento,
    domicilio,
    dni,
    apellido,
    nombre,
    cuil,
    email
  ) {
    this._genero = genero;
    this._fecha_de_nacimiento = fecha_de_nacimiento;
    this._domicilio = domicilio;
    this._dni = dni;
    this._apellido = apellido;
    this._nombre = nombre;
    this._cuil = cuil;
    this._email = email;
  }

  // Getters
  get genero() {
    return this._genero;
  }

  get fecha_de_nacimiento() {
    return this._fecha_de_nacimiento;
  }

  get domicilio() {
    return this._domicilio;
  }

  get dni() {
    return this._dni;
  }

  get apellido() {
    return this._apellido;
  }

  get nombre() {
    return this._nombre;
  }

  get cuil() {
    return this._cuil;
  }

  get email() {
    return this._email;
  }

  // Setters
  set genero(value) {
    this._genero = value;
  }

  set fecha_de_nacimiento(value) {
    this._fecha_de_nacimiento = value;
  }

  set domicilio(value) {
    this._domicilio = value;
  }

  set dni(value) {
    this._dni = value;
  }

  set apellido(value) {
    this._apellido = value;
  }

  set nombre(value) {
    this._nombre = value;
  }

  set cuil(value) {
    this._cuil = value;
  }

  set email(value) {
    this._email = value;
  }

  static get(callback) {
    con.query("SELECT * FROM usuarios", callback);
  }
  static getByCuil(cuil, callback) {
    con.query(`SELECT * FROM usuarios WHERE cuil = ${cuil}`, callback);
  }
  static create(data, callback) {
    con.query(
      `INSERT INTO persona SET nombre = "${data.nombre}",
      apellido = "${data.apellido}", email = "${data.email}",
      cuil = ${data.cuil}, dni = ${data.dni},
      domicilio = '${data.domicilio}',
      genero = '${data.genero}',
      fecha_de_nacimiento = '${data.fecha_de_nacimiento}' `,
      callback
    );
  }
}
module.exports = Persona;
