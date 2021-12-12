const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    // user name
    {
        type: 'input',
        name: 'name',
        message: 'Enter your full name (Required)',
        validate: nameInput =>
        {
            if (nameInput)
            {
                return true;
            } else
            {
                console.log('Please enter your full name!');
                return false;
            }
        }
    },
    // GitHub
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: gitHubInput =>
        {
            if (gitHubInput)
            {
                return true;
            } else
            {
                console.log('Please enter your GitHub Username!');
                return false;
            }
        }
    },
    // email
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: gitHubInput =>
        {
            if (gitHubInput)
            {
                return true;
            } else
            {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
    // app name
    {
        type: 'input',
        name: 'title',
        message: 'What is your project called? (Required)',
        validate: titleNameInput =>
        {
            if (titleNameInput)
            {
                return true;
            } else
            {
                console.log('Please provide a title for your project');
                return false;
            }
        }
    },
    // description
    {
        type: 'confirm',
        name: 'confirmDes',
        message: 'Would you like to enter a description for your project?',
        default: true
    },
    // desc input
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description about your project:',
        when: ({ confirmDes }) =>
        {
            if (confirmDes)
            {
                return true;
            } else
            {
                return false;
            }
        }
    },
    // installation
    {
        type: 'confirm',
        name: 'confirmInstall',
        message: 'Would you like to include an installation section for your project?',
        default: true
    },
    // installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for your project:',
        when: ({ confirmInstall }) =>
        {
            if (confirmInstall)
            {
                return true;
            } else
            {
                return false;
            }
        }
    },
    // usage
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to add a usage section for your project?',
        default: true
    },
    // usage instructions
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information about your project:',
        when: ({ confirmUsage }) =>
        {
            if (confirmUsage)
            {
                return true;
            } else
            {
                return false;
            }
        }
    },
    // tests
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to add a tests section for your project?',
        default: true
    },
    // test info
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test information about your project:',
        when: ({ confirmTests }) =>
        {
            if (confirmTests)
            {
                return true;
            } else
            {
                return false;
            }
        }
    },
    // license
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add a license for your project?',
        default: true
    },
    // license choice
    {
        type: 'list',
        name: 'license',
        message: 'Please select which license you would like to use:',
        choices: ['MIT License', 'GNU GPLv3 License'],
        when: ({ confirmLicense }) =>
        {
            if (confirmLicense)
            {
                return true;
            } else
            {
                return false;
            }
        }
    }
];

const getInput = () =>
{
    return inquirer.prompt(questions).then(data => { return data });
}


// TODO: Create a function to write README file
function writeToFile(data)
{
    fs.writeFile(`./generated/README(${data[0]}).md`, data[1], err =>
    {
        if (err)
        {
            console.log(err)
        }
        console.log("Generated README!")
    })
}

// TODO: Create a function to initialize app
function init()
{
    getInput()
        .then(input =>
        {
            return generateMarkdown(input);
        })
        .then((data) =>
        {
            return writeToFile(data);
        })
        .catch(err =>
        {
            console.log(err);
        })
}

// Function call to initialize app
init();
