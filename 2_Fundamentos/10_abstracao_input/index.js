const inquirer = require("inquirer")

inquirer.prompt([
    { name: "p1", message: "qual a primeira nota? \n" },
    { name: "p2", message: "qual a segunda nota? \n" }
]).then((answers)=> {
    console.log(answers)
    const media = ((parseInt(answers.p1)+ parseInt(answers.p2))/2)
    console.log(`A média eh: ${media}`)
}
).catch(err => console.log(err))