module.exports = {
    exibirNome(req, res){
        let nome = req.params.nome;
        res.send('obrigado por acessar: '+ nome);
    }
}