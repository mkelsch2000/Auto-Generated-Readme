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
