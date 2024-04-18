#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "please write the sentence to count the word:"
});
const word = answer.sentence.trim().split(" ");
console.log(`your sentence word count is   ${word.length}`);
