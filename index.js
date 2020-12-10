const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const {generateMarkdown} = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Title of project:",
        name: "title"
    },
    {
        type: "input",
        message: "Add a description of program:",
        name: "description"
    },
    {
        type: "input",
        message: "Add an installation instructions for this program if  it is necessary:",
        name: "installGuide"
    },
    {
        type: "input",
        message: "Add guide for the users:",
        name: "usage"
    },
    {
        type: "input",
        message: "Write the names and Github usernames :",
        name: "collaborators"
    },
    {
        type: "list",
        message: "Pick a license for the project:",
        choices:["Apache_2.0","BSD3","BSD2","GPL","LGPL","MIT","Mozilla_PL_2.0","Common_DDL","Eclipse_PL_v2.0"],
        // from https://opensource.org/licenses
        name: "selectedLicense"
    },
    {
        type: "input",
        message: "Your Github user name:",
        name: "creatorGithub"
    },
    {
        type: "input",
        message: "Your email address:",
        name: "creatorEmail"
    },
    {
        type: "input",
        message: "Any additional information:",
        name: "additInfo"
    }
];


const writeFileAsync =   util.promisify (fs.writeFile) ;    


function promptUser(){
    return inquirer.prompt(questions);
}


function init(){
    promptUser() 
        .then(function(data) { //sends answers
            const markdown = generateMarkdown(data);
            return writeFileAsync("readme.md",markdown);
        })
        .then(function() { 
            console.log("Successfully wrote to readme.md");
        })
        .catch(function(err) { 
            console.log(err)
        });
}

// run the program
init();