
const Sequelize = require('sequelize');
const sequelize =  new Sequelize('sistema', 'root', 'tzyirvo123', {
    host: "localhoost",
    dialet: 'mysql'
})

const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    }
})

Postagem.sync({force:true})