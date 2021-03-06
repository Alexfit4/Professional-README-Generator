// TODO: Create a function that returns a license badge based on which license is passed in
// * Function returning the license bage depending on what license the user inputs, if there is no license it will return an empty string.
function renderLicenseBadge(license) {
	if (license === "MIT") {
		return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
	}
	if (license === "APACHE 2.0") {
		return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
	}
	if (license === "Mozilla") {
		return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
	}
	if (license === "GNU") {
		return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
	}

	return "";
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
2. [Usage](#usage)
	1. [Testing](#test)
3. [Contribution](#contribution)
4. [Contact Me](#contact)
5. [License](#license)
## Installation <a name="installation"></a>
\`\`\`bash
${answer.installation}
\`\`\`
## Usage <a name="usage"></a>
${answer.usage}
To run the tests: <a name="test"></a>
\`\`\`bash
${answer.test}
\`\`\`
## Contribution <a name="contribution"></a>
${answer.contributing}
## Have a question? <a name="contact"></a>
[Github Account](https://github.com/${answer.github})
Email me at ${answer.email}
## License 
${renderLicenseBadge(answer.license)}

`;
}

module.exports = generateMarkdown;
