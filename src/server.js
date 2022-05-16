const port = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 4230.00}) // conversão automática ao JSON

})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`)
})