// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (license === "MIT") {
		return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
	}
	if (license === "APACHE 2.0") {
		return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
	}
	if (license === "Boost") {
		return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
	}
	if (license === "GNU") {
		return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
	}

	return ""
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
1. [Installation](#installation)
## Installation <a name="installation"></a>
\`\`\`bash
${answer.installation}
\`\`\`
## Usage
${answer.usage}
To run the tests:
\`\`\`bash
${answer.test}
\`\`\`
## Contribution
${answer.contributing}
## Have a question?
[Github Account](https://github.com/${answer.github})
Email me at ${answer.email}
## License
${renderLicenseBadge(answer.license)}

`;
}

module.exports = generateMarkdown;


