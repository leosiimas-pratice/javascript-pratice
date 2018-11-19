const express = require ('express')
const app = express()
const bodyParse = require ('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require  ('./api/usuario')
//app.use(saudacao('Leonardo'))


app.post('/usuario', usuarioApi.salvar)
app.get('./usuario', usuarioApi.obter)

app.use(bodyParse.text())
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended: true}))

app.get('/clients/relatorio', (req,res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.get('/clients/:id', (req, res) => {
    res.send(`Client ${req.params.id} selecionado`)
})

app.post('/corpo', (req, res) => {
   /*  let corpo = ''
    req.on('data', function(parte) {
        corpo += parte
    })

    req.on('end', function(){
        res.send(corpo)
    }) */
    res.send(JSON.stringify(req.body))
})

/* app.use((req, res) => {
    res.json({
        nome: 'IPAD 32G',
        price: 1899
    })
    //res.send("Estou bem")
}) */

app.listen(3000)