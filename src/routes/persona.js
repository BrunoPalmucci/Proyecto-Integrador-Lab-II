const express = require("express");
const router = express.Router();

const controlPersona = require("../control/controlPersona.js")

router.post('/',controlPersona.crearPersona)

module.exports = router