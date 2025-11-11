// nome

// console.log(process.argv)

const arg = process.argv.slice(2)
const idade = process.argv.slice(3)

// console.log(arg)

const nome=arg[0].split("=")[1]
const idad=idade[0].split("=")[1]

// console.log(nome)
// console.log(idad)

console.log(`o nome eh: ${nome} \na sua idade eh: ${idad}`)