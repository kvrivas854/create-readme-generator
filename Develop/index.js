const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter your project title: "
    },
    {
        type: "input",
        name: "desc",
        message: "Please enter your project description: "
    },
    {
        type: "input",
        name: "install",
        message: "Please enter installation instructions: "

    }, 
    {
        type: "input",
        name: "usage",
        message: "Please enter usage instructions: "
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter contribution guidelines: "

    },
    {
        type: "input",
        name: "test",
        message: "Please enter test instructions: "

    },
    {
        type: "input",
        name: "email",
        message: "What is your email address? "

    },
    {
        type: "input",
        name: "github",
        message: "What is your github username? "

    },
    {
        type: "input",
        name: "repository",
        message: "What is the name of your repository? "

    },
    {
        type: "list",
        name: "license",
        message: "Please select licenses: ",
        choices: [
            "Apache",
            "MIT",
            "Mozilla"
        ]
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, function(err){
        if(err)
            console.log(err);
    })
}

// function to initialize program
function init() {
    
    inquirer.prompt(questions)
    .then((response) => {

        var text = `
    [![${response.repository}](https://img.shields.io/github/languages/top/${response.github}/${response.repository})](https://img.shields.io/github/languages/top/${response.github}/${response.repository})
    ## Title
    ${response.title}


    ## Description
    ${response.desc}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Test](#test)
    - [License](#license)
    - [Questions](#questions)
    
    ## Installation
    ${response.install}
    
    ## Usage
    ${response.usage}
    
    ## Contribution
    ${response.contribution}
    
    ## Test Instructions
    ${response.test}
    
    ## License
    Notice: This application is covered under ${response.license}.
    
    ## Questions
    Feel free to reach out ${response.email} or visit github page at "https://github.com/${response.github}" for more information.

    `

    writeToFile("README.md", text);
    
    })
}


init();

