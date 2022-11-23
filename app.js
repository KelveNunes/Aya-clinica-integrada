const express = require ('express');
const home = require('./src/routes/home');
const path = require('path')

const app = express();
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));
app.use(express.static(path.join(__dirname, "/src/public")))


app.use('/', home);

app.listen(3000, ()=>{
    console.log('servidor rodando');
})
