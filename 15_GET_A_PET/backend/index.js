const express = require('express')
const cors = require('cors')

const app = express()

//config json response
app.use(express.json())

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

//publica pasta image

app.use(express.static('public'))

//Rotas
const UserRoutes = require('./routes/UserRoutes')
app.use('/users', UserRoutes)



app.listen(5000)