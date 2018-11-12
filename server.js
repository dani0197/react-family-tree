const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const usersApi = require('./routes/usersApi')


const SERVER_PORT = 3030

mongoose.connect('mongodb://localhost/familytreeDB', ()=> {
    console.log("DB connected!")
})

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(function (req, res, next) {
    res. header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
})

app.use('/', usersApi);

app.listen(SERVER_PORT, ()=> {
    console.log(`server running on port ${SERVER_PORT}`);
})
