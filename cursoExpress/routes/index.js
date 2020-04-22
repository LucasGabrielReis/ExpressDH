var express = require('express');
var router = express.Router();
var ContatoController = require("../controllers/ContatoController")
var EstudanteController = require("../controllers/EstudanteController")
var HomeController = require("../controllers/HomeController")

/* GET home page. */
router.get('/', HomeController.index);

router.get("/contato", ContatoController.index)
router.get("/estudantes", EstudanteController.index)

module.exports = router;
