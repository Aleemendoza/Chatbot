'use strict';

var express = require('express');
var router = express.Router();
var todos = require('../models/todos.js');
module.exports = router;


router.get('http"//localhost:3001/todos', function(res,req){

    res.send(todos.respuesta)


})