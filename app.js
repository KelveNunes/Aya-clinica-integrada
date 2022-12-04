const express = require ('express');
const home = require('./src/routes/home');
const agendamento = require('./src/routes/agendamento');
const path = require('path')
const bodyParser = require("body-parser");

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));
app.use(express.static(path.join(__dirname, "/src/public")))

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/', home);
app.use('/', agendamento);

app.listen("https://ayaclin.onrender.com", ()=>{
    console.log('servidor rodando');
})
