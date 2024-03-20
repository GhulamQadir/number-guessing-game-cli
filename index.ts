#! /usr/bin/env node

import inquirer from "inquirer";


const randomNum = Math.floor(Math.random()*11)
// console.log(randomNum)
const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Guess number between 1 to 11: ",
  },
]);
console.log(answers)


if(answers.userGuessedNumber===randomNum){
    console.log("Congrats! You guessed a correct number")
}
else{
    console.log("You guessed wrong number")
}