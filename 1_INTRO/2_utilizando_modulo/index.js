// import
const fs = require('fs') // em python era melhor kk

fs.readFile("arquivo.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data)
    }

    return
})