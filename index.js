const express = require('express');
const app= express();
const handlebars =  require('express-handlebars')
const bodyParser= require('body-parser')

//config
    //templete engine
    app.engine('handlebars',handlebars({defaultLayout:'main'})) //main -> templete da operacao
    app.set('view engine', 'handlebars')
    //body parser
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())

    app.get('/cad', function(req,res){
        res.render('formulario')
    })

    app.post('/add', function(req, res){
        req.body.conteudo
        res.send('texto: '+req.body.titulo + ' conteudo: '+req.body.conteudo)
    })


app.listen(3000,()=>{
    console.log('servidor rodando na porta 3000.')
})