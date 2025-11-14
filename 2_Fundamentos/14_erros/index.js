const { error } = require("console")

// const x = 'aaa'
const x = 10

//check 
if (!Number.isInteger(x)){
    throw new error(" o valor de X não é um Int")
}

console.log("Continuando o codigo ")