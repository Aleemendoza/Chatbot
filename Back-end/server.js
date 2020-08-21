const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const env = require('dotenv')

app.use(bodyParser.urlencoded({extended:  true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('bienvenido usuarios!');

});

app.listen(3001, (err) => {
    if (!err) {
        console.log('funciona')
    } else
        console.log(err)
}); 

