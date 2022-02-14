// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   console.log(data.license);
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   console.log(data.license);
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   console.log(data.license);
// }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = readMeTemplate => {
  
  return `
  # ${readMeTemplate.title}

  ## Description
  ${readMeTemplate.description}

  ## Table of Contents:
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${readMeTemplate.install}

  ## Usage
  ${readMeTemplate.usage}

  ## License
  This project is licensed under: ${readMeTemplate.license}

  ## Contributing
  ${readMeTemplate.contribution}

  ## Tests
  ${readMeTemplate.test}

  ## Questions
  My GitHub: ${readMeTemplate.username}

  Feel free to contact me at: ${readMeTemplate.email}
  `;
};
