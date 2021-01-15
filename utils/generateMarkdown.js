// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if(license === "MIT") {

	} else if(license === "APACHE 2.0") {
		return "{[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)}"
	} else if(license === "GBL 3.0") {

	} else if(license === "BDS 3") {

	} 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
	return `# ${answer.title}
## Description
${answer.description}
## Table of Contents
## Installation
${answer.installation}
## Usage
${answer.usage}
To run the tests:
\`\`\`bash
${answer.test}
\`\`\`
## License
${renderLicenseBadge(answer.license)}

`;
}

module.exports = generateMarkdown;
