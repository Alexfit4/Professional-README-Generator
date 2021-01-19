// * Imported required packages
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkDown = require("./utils/generateMarkdown");

//* Array of questions for user input
const questions = [
	{
		type: "input",
		name: "github",
		message: "What is your GitHub username?",
		validate: async function (input) {
			console.log(input);
			if (input.length === 0) {
				return "Input your Github username";
			}
			return true;
		},
	},
	{
		type: "input",
		name: "email",
		message: "What is your email address?",
		validate: async function (input) {
			console.log(input);
			const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (!re.test(input)) {
				return "Input a valid email";
			}
			return true;
		},
	},
	{
		type: "input",
		name: "title",
		message: "What is your project's name?",
		validate: async function (input) {
			console.log(input);
			if (input.length === 0) {
				return "Input your project's name.";
			}
			return true;
		},
	},
	{
		type: "input",
		name: "description",
		message: "Enter a description of your project.",
		validate: async function (input) {
			console.log(input);
			if (input.length === 0) {
				return "Please describe your project.";
			}
			return true;
		},
	},
	{
		type: "list",
		name: "license",
		message: "What kind of license should your project have?",
		choices: ["MIT", "APACHE 2.0", "Mozilla", "GNU", "NONE"],
		default: "NONE",
	},
	{
		type: "input",
		name: "installation",
		message: "What command should be run to install dependencies?",
		default: "npm i",
	},
	{
		type: "input",
		name: "test",
		message: "What command should be run to run tests?",
		default: "npm test",
	},
	{
		type: "input",
		name: "usage",
		message: "What does the user need to know about using the repo?",
		validate: async function (input) {
			console.log(input);
			if (input.length === 0) {
				return "Please input something.";
			}
			return true;
		},
	},
	{
		type: "input",
		name: "contributing",
		message: "What does the user need to know about contributing to the repo?",
	},
];

// * Convert to README file

let answers = inquirer.prompt(questions);

answers.then((answer) => {
	let data = generateMarkDown(answer);
	fs.writeFileSync("README2.md", data);
});
