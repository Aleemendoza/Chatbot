'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
var router = express.Router();
module.exports = router;
const bodyParser = require('body-parser');
app.use(router);

app.listen('3001', function(){

    console.log('el servidor esta funcionando')
});

app.use(bodyParser());
app.use(cors())
app.get("/messages/:msgId", function(req, res){
    var name = req.params.msgId    
console.log(name)
})
app.use(function(req, res){

    res.status(404).send('not found');



})