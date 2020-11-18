const maintainedChoice = ["yes", "no", "none"]
const licenseChoice = [
    "Apche 2.0",
    "GNU General Public v3.0",
    "MIT", 
    'BSD 2-Clause "Simplified"',
    'BSD 3-Clause "New" or "Revised"',
    "Boost Software 1.0", 
    "Creative Commons Zero v1.0 Universal",
    "Eclipse Public 2.0", 
    "GNU Affero General Public v3.0",
    "GNU General Public v2.0",
    "GNU Lesser General Public v2.1",
    "Mozilla Public 2.0", 
    "The Unlicense"
]

const userQues = [
    {name: "name",
    type: "input",
    message: "Project title (required)",
    validate: answer => {
        if (answer) {
            return true;}
        else {
            console.log("please enter a project title!");
            return false;}
        }
    },
    {name: "description",
    type: "input",
    message: "Short blurb about your project (required)",
    validate: answer => {
        if (answer) {
            return true;}
        else {
            console.log("please type in a short description!");
            return false;}
        }
    },
    {name: "motivation",
    type: "input",
    message: "Short description of motivation behind your project (press enter to skip)",
    },
    {name: "features",
    type: "input",
    message: "List some features that makes your project stand out-separate with commas (press enter to skip)"
    },
    {name: "version",
    type: "input",
    message: "Project version (press enter to skip)",
    },
    {name: "install",
    type:"input",
    message:"Command or instructions to get ready for usage of project (required)",
    validate: answer => {
        if (answer) {
            return true;}
        else {
            console.log("please type installation directions");
            return false;}
        }
    },
    {name: "usage",
    type:"input",
    message:"Command or instructions for usage of project (required)",
    validate: answer => {
        if (answer) {
            return true;}
        else {
            console.log("please give testing directions");
            return false;}
        }
    },
    {name: "test",
    type:"input",
    message:"Command or instructions for testing (required)",
    validate: answer => {
        if (answer) {
            return true;}
        else {
            console.log("please give testing directions");
            return false;}
        }
    },
    {name: "language",
    type: "input",
    message: "Project language(s) (press enter to skip)",
    },
    {name: "statusM",
    type: "confirm",
    message: "Project maintained (required)",
    choices:maintainedChoice,
    validate: answer => {
        if (answer.length !== 1) {
            console.log('You must to select only one option');
            return false
        } else {
            return true
        }
    }},
    {name: "statusYear",
    type: "input",
    message: "Type the year was the project last maintained i.e.2020(required)",
    choices:maintainedChoice,
    validate: answer => {
        if (answer) {
            return true;}
        else {
            console.log("please enter the year the project was last");
            return false;}
        }
    },
    {name: "apiRef",
    type: "input",
    message: "List the API references used-separate with commas (press enter to skip)"
    },
    {name: "used",
    type: "input",
    message: "List all the types of tech/bootstrap used-separate with commas (press enter to skip)"
    },
    {name: "contributor",
    type: "input",
    message: "List contributor(s) github username for project-separate with commas (required)",
    validate: answer => {
        if (answer) {
            return true;}
        else {
            console.log("please enter at least one contributor");
            return false;}
        }
    },
    {name: "comment",
    type: "confirm",
    message: "Would you like to add a thank you message for all the contributors?",
 
    },
    {name: "license",
    type: "checkbox",
    message: "please choose one license name (required)",
    choices: licenseChoice,
    validate: answer => {
        if (answer.length !== 1) {
        console.log('You must to select only one option');
        return false;} 
        else {
        return true}
        }
    },
    {name: "deployed",
    type:"input",
    message:"Deployed project url (press enter to skip)"
    },
    {name: "github",
    type:"input",
    message:"Please enter your github username (required)",
    validate: answer => {
        if (answer) {
            return true;}
        else {
            console.log("please type in your github username");
            return false;}
        }
    },
    {name: "email",
    type:"input",
    message:"Please enter your email (required)",
    validate: answer => {
        if (answer) {
            return true;}
        else {
            console.log("please type in your email");
            return false;}
        }
    },
    {name: "userName",
    type:"input",
    message:"Please enter your First and Last name (required)",
    validate: answer => {
        if (answer) {
            return true;}
        else {
            console.log("please type in your name");
            return false;}
        }
    },
    {name: "msg",
    type:"input",
    message:"Any special message? (press enter to skip)"
    }
]

    module.exports = userQues

    // {name: "statusM",
    // type: "checkbox",
    // message: "Project maintained (required)",
    // choices:maintainedChoice,
    // validate: answer => {
        // if (answer.length !== 1) {
        //     console.log('You must to select only one option');
        //     return false
        // } else {
        //     return true
        // }