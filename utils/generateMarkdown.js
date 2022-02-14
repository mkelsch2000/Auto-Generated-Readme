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
  #${data.title}

  ## Description
  ${data.description}

  ## Table of Contents:
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${generateUsageInfo(data)}

  ## License
  This project is licensed under: ${data.license}

  ## Contributing
  ${generateContributionInfo(data)}

  ## Tests
  ${data.test}

  ## Questions
  My GitHub: ${data.username}

  Feel free to contact me at: ${data.email}
  `;
};
