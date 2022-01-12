// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "managerName",
    message: "What is the Name of the manager?",
  },
  {
    type: "input",
    name: "managerEmployeeID",
    message: "What is the mangers employee ID number?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is the mangers email address?",
  },
  {
    type: "input",
    name: "managerOfficeNo",
    message: "What is the mangers office Number?",
  },

  {
    type: "list",
    name: "addEmployee",
    message: "what other employees would you like to add? ",
    //most popular free choices according to opensource.org
    choices: ["Intern" ,"Engineer", "I don't want to add anymore employees"],
  },
  

];
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
//didn't do this as the functionality is created inside the init() function at 36-40

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const content = generateMarkdown(answers);
        fs.writeFile("index.html", content, (err) =>
          err
            ? console.log(err)
            : console.log("Created 'README.MD'")
        );
      });
}

// Function call to initialize app
init();


//team manager’s name, employee ID, email address, and office number#
// engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
//intern’s name, ID, email, and school, and I am taken back to the menu