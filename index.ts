#! /usr/bin/env node

import inquirer from "inquirer";

const answers : {sentence:string} = await inquirer.prompt([{

    name:"sentence",
    
    type:"input",
    
    message:"Enter your sentence to count your words"
}]);

const words = answers.sentence.trim().split(" ") 

console.log(words);

console.log(`${words.length} words are counted in the sentence`)

//    X_______X

