// TODO: Include packages needed for this application
//const { writeFile, copyFile } = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
//const generatePage = require('./src/src/page-template');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Please provide the title of your Project (Required)?',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a decription of your project(Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter your project description!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmContents',
        message: 'Would you like to enter a table of contents?',
        default: true
      },
      {
        type: 'input',
        name: 'contents',
        message: 'Provide table of contents:',
        when: ({ confirmContents }) => confirmContents
      },
      {
        type: 'input',
        name: 'contents',
        message: 'Provide table of contents:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide installation steps and details:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:'
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their Github profiles:'
      },
      {
        type: 'input',
        name: 'license',
        message: 'Provide details of licensing for other developers:'
      },
      {
        type: 'input',
        name: 'badges',
        message: 'Include any badges associated with this project:'
      },
      {
        type: 'input',
        name: 'features',
        message: 'Provide a list of your features:'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Add details of how others can contribute:'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide examples about tests and how to to run them:'
      },

    ]);
  };
  
 
  

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
