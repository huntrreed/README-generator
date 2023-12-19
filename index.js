// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//An array of questions for user input
const questions = [
    { 
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?' 
    }

];
console.log(questions);

// TODO: Create a function to write README file
function writeToFile(ReadMeGen, data) {
    fs.writeFile(ReadMeGen, data, (err) =>
    err ? console.error(err) : console.log('README.md generated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=> {
        const readmeContent = generateReadmeContent(answers);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
function generateReadmeContent(answers){
    return
}
init();
