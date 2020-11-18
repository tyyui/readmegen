const questions = require('./util/question');
const generatefile = require('./util/generatefile');

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync =  util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt(questions)
}

//function to initialize program
async function init() {
    console.log ('Thank you for using my README generator!')
    try {
        const response = await promptUser();
        const mdFile = generatefile(response);

        await writeFileAsync('readme-template.md', mdFile);
    
        console.log("Successful! README.md created");
      } catch(err) {
        console.log(err);
      }
}

//function call to initialize program
init();
 