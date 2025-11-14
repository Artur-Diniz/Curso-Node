const minimist = require("minimist")


//extreno
const args = minimist(process.argv.slice(2))

const a = parseInt(args['a'])
const b = parseInt(args['b'])

//interno
const soma = require('./soma').soma

soma(a, b)



// para rodar
// node .\index.js --a={num a} --b={num b}


// ainda n sei para q alguém utilizaria isso
