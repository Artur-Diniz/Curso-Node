const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//rotas

app.post("/createproduct", (req, res) => {
    const name = req.body.nome
    const price = req.body.price


    res.json({
        message: `o nome eh ${name}, e o preco eh ${price}`
    })
})


app.get("/", (req, res) => {
    res.json({
        message: "primeira rota criada com sucesso!"
    })
})

app.listen(3000)