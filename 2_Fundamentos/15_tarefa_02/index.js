// const inquirer = require("inquirer")
import chalk from 'chalk';
import inquirer from 'inquirer';

inquirer.prompt([
    { name: "p1", message: "qual a primeira nota? \n" },
    { name: "p2", message: "qual a segunda nota? \n" }
]).then((answers) => {
    const media = ((parseInt(answers.p1) + parseInt(answers.p2)) / 2)

    if (media >= 5)
        console.log(chalk.green(`Parabéns! Você está aprovado, sua média eh: ${media}`))
    else
        console.log(chalk.bgRed.black(`recuperação meu brother, sua nota eh: ${media} `))

}
).catch(err => console.log(err))