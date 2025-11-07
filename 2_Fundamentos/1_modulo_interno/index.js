import module from './modulo.js'; // agr sim igualzinho python

const soma = module.soma // assim importa a function do modulo externo
// const sum = module.soma(2,4) eu ainda prefiro dessa maneira pois me lembra exatamente de onde vem o pacote 
const sum = soma(2, 3)

console.log("sua soma eh " + sum)
