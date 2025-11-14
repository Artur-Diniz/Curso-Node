const fs = require("fs")

console.log("Inicio")


fs.writeFile("Arquivo.txt","OI", function(err){
    setTimeout(function(){
        console.log("arquivo criado")
    },1000)
})

console.log("Fim")