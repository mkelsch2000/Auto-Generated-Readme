// function for generating usage area content
const generateUsage = usageText => {
  if (!usageText) {
    return "";
  }

  return `
  ## Usage
  ${usageText}
  `
}

// function to generate the Contribution area
const generateContribution = contributionText => {
  if (!contributionText) {
    return "";
  }

  return `
  ## Contributing
  ${contributionText}
  `
}

// function to generate the email content
const generateEmail = emailText => {
  if (!emailText) {
    return "";
  } else {
    return `
    Feel free to contact me at: ${emailText}
    `
  }
}

// function to generate the correct badge for the chosen license.
const generateBadge = licenseName => {
  switch(licenseName[0]) {
    case "GNU Affero General Public License v3.0":
      return "[![License](https://img.shields.io/badge/License-AGPL-3.0-blue.svg)](https://opensource.org/licenses/AGPL-3.0)";
    case "GNU General Public License v3.0":
      return "[![License](https://img.shields.io/badge/License-gpl-3.0-blue.svg)](https://opensource.org/licenses/gpl-3.0)";
    case "GNU Lesser General Public License v3.0":
      return "[![License](https://img.shields.io/badge/License-lgpl-3.0-blue.svg)](https://opensource.org/licenses/lgpl-3.0)";
    case "Mozilla Public License 2.0":
      return "[![License](https://img.shields.io/badge/License-MPL_2.0-orange.svg)](https://opensource.org/licenses/MPL_2.0)";
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache-2.0-green.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "MIT License":
      return "[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-BSL-1.0-yellow.svg)](https://opensource.org/licenses/BSL-1.0)";
    case "The Unlicense":
      return "[![License](https://img.shields.io/badge/License-unlicense-red.svg)](https://opensource.org/licenses/unlicense)"
    default:
      return "";
  }
}

// export readme.md template to write file function in index.js
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
