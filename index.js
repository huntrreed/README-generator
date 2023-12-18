// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    { 
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?' 
    }

];

// TODO: Create a function to write README file
function writeToFile(README.md, data) {
    fs.writeFile(README.md, data, (error!) =>
    err ? console.error(error!) : console.log('README.md generated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions)
    .then((answers)=> {
        const readmeContent = generateReadmeContent(answers);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
