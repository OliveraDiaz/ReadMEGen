//I want to build a command-line application that dynamically generates a README.md from a user's input. README instructions: WHEN I choose a license for my application from a list of optionsTHEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under. WHEN I enter my GitHub username, THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile. WHEN I enter my email address. THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions. WHEN I click on the links in the Table of Contents. THEN I am taken to the corresponding section of the README


// TODO: Include packages needed for this application
// We import the `fs` module to enable interaction with the file system
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');


fs.readFile('data.csv', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)
);
// TODO: Create an array of questions for user input


const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project.',
},
{
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions for your project. If none, type "N/A".',
},
{
    type: 'input',
    name: 'usage',      
    message: 'Provide usage information for your project.',  
},
{
    type: 'input',
    name: 'contribution',
    message: 'Provide contribution guidelines for your project.',
},
{
    type: 'input',
    name: 'test',
    message: 'Provide test instructions for your project.',
},
{
    type: 'checkbox',
    name: 'license',
    message: 'Select a license for your project.',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    
},
{
    type: 'input',
    name: 'questions',
    message: 'Provide instructions on how to reach you with additional questions.',
},
{
    type: 'input',
    name: 'links',
    message: 'Provide links to your project.',
},
{
    type: 'input',
    name: 'github', 
    message: 'Provide your GitHub username.',
},
{
    type: 'input',
    name: 'email',
    message: 'Where can users contact you with quesitons?',

    type: 'input',
    name: 'screenshot',
    message: 'Provide a screenshot path for your project.',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {}
inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({...inquirerResponses}));
});

// Function call to initialize app
init();
