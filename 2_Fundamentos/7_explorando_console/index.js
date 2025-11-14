// mais de um valor

const x = 10
const y = "texto"
const z = [1, 2]

console.log(x, y, z)

// return "10 texto [ 1, 2 ]"


//count de print
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)


// maneira mais puxado para linguagem C
console.log("o texto eh: %s", y)


limpar()
// clear console
function limpar() {
    esperarpor=5
    setTimeout(() => {
        espera(3)
        console.clear()

    }, 5*1000);

    setTimeout(() => {
        console.log("limpo")
    }, (2+5)*1000);
}


function espera(qtvezes) {
    vezes = 0
    do {
        setTimeout(() => {
            console.log(".")
        }, 1000);
        vezes += 1
    } while (vezes < qtvezes)
}
// foi mal exagerei, era só pra resetar o terminal 
