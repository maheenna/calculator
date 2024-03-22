#!/usr/bin/env node
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        type: "number",
        name: "firstNumber",
        message: "Enter your first number!"
    },
    {
        type: "number",
        name: "secondNumber",
        message: "Enter your second number!"
    }, {
        type: "list",
        name: "operator",
        message: "seclect any operator !",
        choices: ["Addition(+)", "Subtraction(-)", "Multiplication(*)", "Division(/)"]
    }
]);
const { firstNumber, secondNumber, operator } = answers;
if (firstNumber && secondNumber && operator) {
    let result = 0;
    if (operator === "Addition(+)") {
        result = firstNumber + secondNumber;
    }
    else if (operator === "Subtraction(-)") {
        result = firstNumber - secondNumber;
    }
    else if (operator === "Multiplication(*)") {
        result = firstNumber * secondNumber;
    }
    else if (operator === "Division(/)") {
        result = firstNumber / secondNumber;
    }
    console.log(`Your result is ${result}`);
}
else {
    `please enter valid input`;
}
