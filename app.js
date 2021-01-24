const { json } = require('express');
const express = require('express');
const app= express();

app.set('view engine','ejs');//motor de plantillas para html

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app

app.use('/',require('./router'));

app.listen(5000,()=>{
    console.log('SERVER corriendo en http://localhost:5000');
});