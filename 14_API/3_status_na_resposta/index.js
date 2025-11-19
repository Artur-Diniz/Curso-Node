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

    if (!name){
        res.status(422).json({message:"o campo nome eh obrigatorio."})
        return
    }
    if (!price|| price==0){
        res.status(422).json({message:"o campo preço eh obrigatorio."})
        return
    }

    res.status(201).json({
        message: `o nome eh ${name}, e o preco eh ${price}`
    })
})


app.get("/", (req, res) => {
    res.status(200).json({
        message: "primeira rota criada com sucesso!"
    })
})

app.listen(3000)