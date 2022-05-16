const bancoDeDados = require('../DB')

const port = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())

})

app.get('./produts/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(request.params.id))
})

app.post('/produtos', (req,res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`)
})