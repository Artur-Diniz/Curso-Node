const minimist = require("minimist")

const args = minimist(process.argv.slice(2))

console.log(args)


const nome = args['nome']
const profissao = args['profissao']

console.log(nome)
console.log("\n")
console.log(`meu nome é: ${nome} \nsua profissão é ${profissao}`)

// para rodar 
// node .\index.js --nome={seu nome aqui } --profissão={profissão}


//esse modulo é para abstrair argumentos, não sei para que 
//alguém utilizaria isso sendo que todos os argumentos é recebido via termial