// Packages needed for this application
const inquirer = require("inquirer");
const generatePage = require("./utils/generateMarkdown.js");
const fs = require("fs");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title? (Required)",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please give your project a title!");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "description",
    message: "What is your project description? (Required)",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("You need to provide a description for your project!");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "install",
    message: "What are some instructions on how to install your project? (Required)",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please provide some installation instructions!");
        return false;
      }
    }
  },
  {
    type: "confirm",
    name: "confirmUsageInfo",
    message: "Is there some usage information you would like to provide?",
    default: true
  },
  {
    type: "input",
    name: "usageInfo",
    message: "Provide some usage information.",
    when: ({ confirmUsageInfo }) => {
      if (confirmUsageInfo) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: "confirm",
    name: "confirmContribution",
    message: "Are there any contribution guidelines you would like to set?",
    default: false
  },
  {
    type: "input",
    name: "contribution",
    message: "Provide your contribution guidelines.",
    when: ({ confirmContribution }) => {
      if (confirmContribution) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: "input",
    name: "test",
    message: "Provide some test instructions. (Required)",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please provide test instructions for you application!");
        return false;
      }
    }
  },
  {
    type: "checkbox",
    name: "license",
    message: "Choose a license for your project. (Required)",
    choices: [
      "GNU Affero General Public License v3.0",
      "GNU General Public License v3.0",
      "GNU Lesser General Public License v3.0",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense"
    ],
    validate: choicesInput => {
      if (choicesInput) {
        return true;
      } else {
        console.log("Please choose a license for your project!");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub Username. (Required)",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please provide your GitHub Username!");
        return false;
      }
    }
  },
  {
    type: "confirm",
    name: "confirmEmail",
    message: "Lastly, would you like to provide an email so people can contact you?",
    default: true
  },
  {
    type: "input",
    name: "email",
    message: "Provide your email address.",
    when: ({ confirmEmail }) => {
      if (confirmEmail) {
        return true;
      } else {
        return false;
      }
    }
  }
];

// Function to write README file
function writeToFile(fileData) {
  return new Promise ((resolve, reject) => {
    fs.writeFile("./README.md", fileData, err => {
        if (err) {
        reject(err);

        return;
      }

      resolve({
        ok: true,
        message: "File created!"
      });
    });
  });
};

// Function to initialize app
function init() {
  return inquirer.prompt(questions)
};

// Call to initialize app
init()
.then(data => {
  console.log(data);
  return generatePage(data);
})
.then(readMeData => {
  writeToFile(readMeData);
});



// Instructions:

// title, sections: Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.

// Information to collect: Title, description, installation instructions, usage information, contribution guidelines, test instructions, choose license from list of options, GitHub Username(auto generate link to github), email address(auto generate instructions on how to contact), both username and email go in questions section. 

// Links in Table of Contents to other sections of the readme.
