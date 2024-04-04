#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.bgCyan.red.bold.italic("WELCOME MY AUTOMATED TELLER MACHINE PROJECT"));
console.log();
console.log(chalk.cyan.bold("______________________________________________________________"));
console.log();
let currentBalance = 50000;
let myPinCode = 102030;
let pinAnswer = await inquirer.prompt([
    { message: "Enter your six digit pinCode!", type: "number", name: "pin" },
    { message: "Confirmed your PinCode?", type: "number", name: "code" }
]);
if (pinAnswer.pin === myPinCode) {
    console.log(chalk.yellow("Correct pincode! You have Successfully Login."));
    let actionAnswer = await inquirer.prompt([{
            message: "What do you want to do?",
            type: "list",
            name: "action",
            choices: ["withdraw", "check-balance", "fast-cash"]
        }]);
    if (actionAnswer.action === "withdraw") {
        let amountAnswer = await inquirer.prompt([{
                message: "Enter your amount",
                type: "number",
                name: "amount"
            }]);
        if (amountAnswer.amount > currentBalance) {
            console.log(chalk.yellow("Sorry, You have Insufficient Balance!")); //Assignment No:1 (Insufficient Balance)
        }
        else {
            currentBalance -= amountAnswer.amount;
            console.log(chalk.dim(`Your remaining balance is ${currentBalance}`)); //Assignment No:2 (Template Literals)
        }
    }
    else if (actionAnswer.action === "check-balance") {
        console.log(chalk.greenBright(`Your Current Balance is ${currentBalance}`));
    }
    else if (actionAnswer.action === "fast-cash") {
        let fastCashAnswer = await inquirer.prompt([{
                message: "How much amount you want to Fast Cash?",
                type: "list",
                name: "fastCash",
                choices: [1000, 2000, 5000, 8000, 10000, 15000]
            }]);
        currentBalance -= fastCashAnswer.fastCash;
        console.log(chalk.magenta(`Your Remaining Balance is: ${currentBalance}`)); //Assignment No:3 "Fast Cash"
    }
}
else {
    console.log(chalk.red("Incorrect pincode! Pleased try agin,"));
}
console.log();
console.log(chalk.yellow("THE END"));
console.log(chalk.white.bold("________"));
