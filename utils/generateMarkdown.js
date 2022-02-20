const generateUsage = usageText => {
  if (!usageText) {
    return "";
  }

  return `
  ## Usage
  ${usageText}
  `
}

const generateContribution = contributionText => {
  if (!contributionText) {
    return "";
  }

  return `
  ## Contributing
  ${contributionText}
  `
}

const generateEmail = emailText => {
  if (!emailText) {
    return "";
  } else {
    return `
    Feel free to contact me at: ${emailText}
    `
  }
}

const generateBadge = licenseName => {
  switch(licenseName[0]) {
    case "GNU Affero General Public License v3.0":
      return "[![License](https://img.shields.io/badge/License-AGPL-3.0-blue.svg)](https://opensource.org/licenses/AGPL-3.0)";
    case "MIT License":
      return "[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
    default:
      return "";
  }
}

module.exports = readMeTemplate => {
  
  return `
  # ${readMeTemplate.title}

  ${generateBadge(readMeTemplate.license)}

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

   ${generateUsage(readMeTemplate.usage)}

  ## License
  This project is licensed under: ${readMeTemplate.license}

  ${generateContribution(readMeTemplate.contribution)}

  ## Tests
  ${readMeTemplate.test}

  ## Questions
  My GitHub: ${readMeTemplate.username}

  ${generateEmail(readMeTemplate.email)}
  `;
};
