const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide the installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide the usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide the contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide the test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateReadme(answers);
  fs.writeFileSync('README.md', readmeContent);
  console.log('README.md has been generated');
});

function generateReadme(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions about the project, please contact me at ${answers.email}. You can view more of my projects at [${answers.github}](https://github.com/${answers.github}).
`;
}
