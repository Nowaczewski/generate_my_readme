// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questionPrompts = () => {
  const questions = [];

  return inquirer
    .prompt([
      {
        type: "input",
        name: " project name",
        message: "What is the name of your Project?(Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your Project Title!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Please enter a description for your project (Required)",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("Please a description for your project!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmInstallation",
        message: "Do you have any instructions to include for installation",
        default: true,
      },
      {
        type: "input",
        name: "Installation",
        message: "Provide some information on how to install your app",
        when: ({ confirmInstallation }) => confirmInstallation,
      },
      {
        type: "github",
        name: "github",
        message: "Please enter your GitHub Username.",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("Please enter your Username!");
            return false;
          }
        },
      },
      {
        type: "email",
        name: "email",
        message: "Please enter your Email for contact information",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your email!");
            return false;
          }
        },
      },
      {
        type: "usage",
        name: "usageInformation",
        message:
          "Please detail the projects features, interface, caveats/ anything a user needs to solve problems (usage section)",
        validate: (usageInformation) => {
          if (usageInformation) {
            return true;
          } else {
            console.log("Please enter the usage for your project!");
            return false;
          }
        },
      },
      {
        type: "test",
        name: "testInformation",
        message: "Please detail Test Instructions for your current project",
        validate: (testInformation) => {
          if (testInformation) {
            return true;
          } else {
            console.log("Please enter the test sequence for your project!");
            return false;
          }
        },
      },

      {
        type: "checkbox",
        name: "license",
        message: "What license would you like to add to the README file?",
        choices: [
          "MIT",
          "GNU GPLv3",
          "APACHE 2.0",
          "Boost Software",
          "Mozilla Public",
        ],
      },
      {
        type: "contributors",
        name: "contributorInformation",
        message: "Please list all contributors",
        validate: (contributorInformation) => {
          if (contributorInformation) {
            return true;
          } else {
            console.log("Please enter the usage for your project!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmContributors",
        message: "Would you like to enter another Contributor?",
        default: false,
      },
    ])
    .then((questionData) => {
      questions.push(questionData);
      console.log("Questions line 99", questions);
      if (questionPrompts.confirmContributors) {
        return questionPrompts(questionData);
      } else {
        return questionData;
      }
    });
};

//function to write README file
function writeToFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./Develop/README.md", fileName, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File Created!",
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {}
questionPrompts();
// Function call to initialize app
init();

module.exports = { writeToFile };
