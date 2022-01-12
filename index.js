// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateHtml = require("./utils/generateHtml");

const path = require("path")
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const employeeArr = [];


const indexHtmlFile = path.join(__dirname, "team.html")

function startQuestions() {

  const createEngineer = () => {
    inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Name of the Engineer?",
      },
        {
          type: "input",
          name: "id",
          message: "What is the Engineers employee ID number?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the Engineers email address?",
        },
        {
          type: "input",
          name: "gitHub",
          message: "What is the Engineer username",
        },
      ])
      .then((data) => {
        const EngineerData = new Engineer(
          data.name,
          data.id,
          data.email,
          data.gitHub,
        );
        employeeArr.push(EngineerData);
        console.log(employeeArr);
        addEmployee();
      });
  };

  const createIntern = () => {
    inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Name of the Intern?",
      },
        {
          type: "input",
          name: "id",
          message: "What is the Interns employee ID number?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the Interns email address?",
        },
        {
          type: "input",
          name: "school",
          message: "What is the Interns school",
        },
      ])
      .then((data) => {
        const InternData = new Intern(
          data.name,
          data.id,
          data.email,
          data.school,
        );
        employeeArr.push(InternData);
        console.log(employeeArr);
        addEmployee();
      });
  };

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
      ])
      .then((data) => {
        const managerData = new Manager(
          data.name,
          data.id,
          data.email,
          data.officeNo
        );
        employeeArr.push(managerData);
        console.log(employeeArr);
        addEmployee();
      });
  };
  const addEmployee = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "addEmployee",
          message: "Would you like to add a new employee",
          choices: ["Engineer", "Intern", "No"],
        },
      ])
      .then((data) => {
        if (data.addEmployee == "Engineer") {
          console.log("WE NEED TO ADD A ENGINEER");
          createEngineer()
        }
        else if (data.addEmployee == "Intern") {
          console.log("WE NEED TO ADD A Intern");
          createIntern()
        }
        else {
          console.log("We Don't need anything else");
          // this is where call for our markup function

          buildTeam()
        }
      });
  };



  function buildTeam () {
    fs.writeFileSync(indexHtmlFile, generateHtml(employeeArr), "utf-8" )
  }
  
  createManager();

}

startQuestions();

// TODO: Create a function to initialize app
// function managerFunction() {
//     inquirer.prompt(managerQuestions).then((managerAnswers) => {
//         const content = generateMarkdown(managerAnswers);
//         fs.writeFile("index.html", content, (err) =>
//           err
//             ? console.log(err)
//             : console.log("Created 'index.html file'")
//         );
//       });
// }
