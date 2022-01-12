// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager.js")
const Intern = require("./lib/Intern.js")
const employeeArr = [];

function startQuestions() {

  const createManager = () => {
    inquirer
      .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the Name of the manager?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the mangers employee ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the mangers email address?",
    },
    {
      type: "input",
      name: "officeNo",
      message: "What is the mangers office Number?",
    },
    
    {
      type: "list",
      name: "question",
      message: "what other employees would you like to add? ",
      choices: ["Intern" ,"Engineer", "I don't want to add anymore employees"],
  },
  
  
  
  
])
.then((data) => {
        const managerData = new Manager(
          data.name,
          data.id,
          data.email,
          data.officeNo
        );
        employeeArr.push(managerData);
        console.log(employeeArr)
      });
    };;
  
  createManager()

}

    




startQuestions()




































// TODO: Create a function to initialize app
// function managerFunction() {
//     inquirer.prompt(managerQuestions).then((managerAnswers) => {
//         const content = generateMarkdown(managerAnswers);
//         fs.writeFile("index.html", content, (err) =>
//           err
//             ? console.log(err)
//             : console.log("Created 'README.MD'")
//         );
//       });
// }

