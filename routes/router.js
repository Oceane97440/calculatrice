const express     = require('express');
const expressApp  = express();
const http        = require('http').Server(expressApp);
var router = express.Router();

const calc = require('../controllers/controller_calc');




  router.get("/", calc.index);
  

  module.exports = router;