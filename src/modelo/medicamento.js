class Medicamento {
  constructor(
    nombre_generico,
    nombre_comercial,
    id_familia,
    id_indicacion_medicamento
  ) {
    this._nombre_generico = nombre_generico;
    this._nombre_comercial = nombre_comercial;
    this._id_familia = id_familia;
    this._id_indicacion_medicamento = id_indicacion_medicamento;
  }
}

module.exports = Medicamento;