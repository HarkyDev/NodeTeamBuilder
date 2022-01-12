// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-red.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://opensource.org/licenses/${license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ${renderLicenseBadge(data.license)}
  
  ## <a id="DESCRIPTION"> DESCRIPTION</a>
  ${data.description}

  ## Project Contents
  - [DESCRIPTION](#DESCRIPTION)  
  - [SCREENSHOT](#SCREENSHOT)  
  - [INSTALLATION](#INSTALLATION)  
  - [USAGE](#USAGE)  
  - [CONTRIBUTING](#CONTRIBUTING)  
  - [QUESTIONS](#QUESTIONS)
  - [TESTS](#TESTS)
  - [LICENSE](#LICENSE)  
  
  ## <a id="SCREENSHOT"> SCREENSHOT</a>
  ![screenshot](${data.screenshot})

  ## <a id="INSTALLATION"> INSTALLATION</a>
  ${data.install}

  ## <a id="USAGE"> USAGE</a>
  ${data.usage}
  
  ## <a id="QUESTIONS"> QUESTIONS</a>
  Any questions you can reach me at ${data.emailAddress} or my github page https://github.com/${data.githubName}

  ## <a id="TESTS"> TESTS </a>
  ${data.test}

  ## <a id="CONTRIBUTING"> CONTRIBUTING</a>
  Users who contributed to this project:
 -  https://github.com/${data.githubName}
 -  ${data.contributors}




  ## <a id="LICENSE"> LICENSE</a>
  
  ${data.license}
  ${renderLicenseLink(data.license)}
  
`;
}

module.exports = generateMarkdown;


// all data pulls
// -  ${data.description}
//   -  ${data.githubName}
//   -  ${data.emailAddress}
//   -  ${data.usage}
//   -  ${data.test}
//   -  ${data.screenshot}
//   -  ${data.install}
//   -  ${data.license}
//   -  ${data.licenseColor}
//   -  ${data.contributors}
