const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
    
})


readline.question('qual a sua linguagem preferia? \n', (language)=> {
    if(language == "c#"){
        
        console.log(`java é melhor kk`)
    }else{
        
        console.log(`A minha linguagem preferida é : ${language}`)
    }
    readline.close()
})

