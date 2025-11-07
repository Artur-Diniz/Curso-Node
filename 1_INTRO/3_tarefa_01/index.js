const fs = require('fs') // em python era melhor kk


fs.readFile("txt.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data)
    }

    return
})