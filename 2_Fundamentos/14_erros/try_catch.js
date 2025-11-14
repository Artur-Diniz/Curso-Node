const x = 10

try {
    x=1 // forçando o erro para evidenciar
} catch (err) {
    console.log(`Erro: ${err}`)
}