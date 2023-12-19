// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//An array of questions for user input
const questions = [
    { 
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?' 
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of the project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?'
    },
    {
        type: 'input',
        name: 'usage information',
        message: 'How do is your application used?'
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'What are the guidelines for your project?'
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'How do you test the project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license from the following list for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
    }
];
//checking that questions are loading correctly
console.log(questions);

// A function to write README file
function writeToFile(ReadMeGen, data) {
    fs.writeFile(ReadMeGen, data, (err) =>
    err ? console.error(err) : console.log('README.md generated!')
    );
}

//Create a function to initialize app
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

    
init();
