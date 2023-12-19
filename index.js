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
        name: 'usageInformation',
        message: 'How do is your application used?'
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'What are the guidelines for your project?'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'How do you test the project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license from the following list for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: "GithubUserName",
        message: "What is your GitHub user name?"
    },
    {
        type: 'input',
        name: "GithubLink",
        message: "Please paste the link to your GitHub profile."
    },
    {
        type: 'input',
        name: "email",
        message: "What is your email address?"
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
function generateReadmeContent(answers) {
    //license info from choice question
    const licenseBadges = {
        'MIT': {
            badge: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
            notice: 'Project License: MIT License.'
        },
        'Apache 2.0': {
            badge: '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
            notice: 'Project License: Apache License 2.0.'
        },
        'GPLv3': {
            badge: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
            notice: 'Project License: GNU GPLv3 License.'
        },
        'BSD 3-Clause': {
            badge: '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)',
            notice: 'Project License: BSD 3-Clause License.'
        },
        'None': {
            badge: '',
            notice: 'This project is not licensed.'
        }
    };
    // Select the badge and notice
    const licenseInfo = licenseBadges[answers.license];

    return `

 # ${answers.title}

 ${licenseInfo.badge}
 
 ## Description
${answers.description}

 ## Table of Contents
    - [Installation](##installation)
    - [Usage](###usage)
    - [Contributing](###contributing)
    - [Tests](###tests)
    - [License](###license)
    - [Questions](##questions)

## Installation
${answers.installation}

### Usage
${answers.usageInformation}

### Contributing
${answers.contributionGuidelines}

### Tests
${answers.testInstructions}


### License
${licenseInfo.notice}

## Questions
Contact me with any other questions regarding this project via the email listed below
GitHub: [${answers.GithubUserName}](${answers.GithubLink})
Email: ${answers.email}
`;
}

init();
