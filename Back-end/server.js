const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const env = require('dotenv').load();

app.use(bodyParser.urlencoded({extended = true}));
app.use(bodyParser.json());

app.use(session({secret : 'keyboard cat', resave: true, saveUninitialized: true}));
app.use(passport());
app.use(session());

app.get('/', (req, res) => {
    res.send('bienvenido usuarios!');

});

app.listen(3000, (err) => {
    if (!err) {
        console.log('funciona')
    } else
        console.log(err)
}); 

