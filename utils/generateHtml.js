//const Employee = require("../lib/Employee");

function generateCard (profiles){

const teamCardArr = [];
// manger generator
function createManager(manager){
    console.log(manager)
        return `

        
             <div class="shadow-2xl shadow-black m-4 max-w-sm bg-white rounded-t-3xl rounded-b-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div class="bg-blue-500 p-4 rounded-t-lg">
              <p class=" ml-4 mb-2 text-2xl font-bold tracking-tight text-white">${manager.name}</p>
              <p class=" ml-4 mb-2 text-2xl font-bold tracking-tight text-white"><span><i class="fas fa-mug-hot"></i></span>  ${manager.getRole()}</p>
          </div>
        <div class="p-16">
          <p class="m-4" > <span class="font-bold ">ID: </span> ${manager.id}</p>
          <p class="m-4 mt-10 mb-10" > <span class="font-bold ">EMAIL: </span> ${manager.email}</p>
          <p class="m-4" > <span class="font-bold ">OFFICE NUMBER: </span> ${manager.officeNo} </p>
        </div>
      </div>
        `
}




teamCardArr.push(
    profiles
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => createManager(manager))
)


// engineer generator
function createEngineer(engineer){
    console.log(engineer)
        return `
        <div class="shadow-2xl shadow-black m-4 max-w-sm bg-white rounded-t-3xl rounded-b-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="bg-blue-500 p-4 rounded-t-lg">
            <p class=" ml-4 mb-2 text-2xl font-bold tracking-tight text-white">${engineer.name}</p>
            <p class=" ml-4 mb-2 text-2xl font-bold tracking-tight text-white"><span><i class="fas fa-cogs" style="color: white"></i></span>   ${engineer.getRole()}</p>
        </div>
      <div class="p-16">
        <p class="m-4" > <span class="font-bold ">ID: </span> ${engineer.id}</p>
        <p class="m-4 mt-10 mb-10" > <span class="font-bold ">EMAIL: </span> ${engineer.email}</p>

        <a href="https://github.com/${engineer.gitHub}" target="_blank">
        <p class="m-4" > <span class="font-bold ">GITHUB: </span> ${engineer.gitHub} </p>
        </a>
      </div>
    </div>




        `
}


teamCardArr.push(
    profiles
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => createEngineer(engineer))
)


// intern generator
function createIntern(intern){
    console.log(intern)
        return `
        <div class="shadow-2xl shadow-black m-4 max-w-sm bg-white rounded-t-3xl rounded-b-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="bg-blue-500 p-4 rounded-t-lg">
            <p class=" ml-4 mb-2 text-2xl font-bold tracking-tight text-white">${intern.name}</p>
            <p class=" ml-4 mb-2 text-2xl font-bold tracking-tight text-white"><span><i class="fas fa-graduation-cap"></i></span>  ${intern.getRole()}</p>
        </div>
      <div class="p-16">
        <p class="m-4" > <span class="font-bold ">ID: </span> ${intern.id}</p>
        <p class="m-4 mt-10 mb-10" > <span class="font-bold ">EMAIL: </span> ${intern.email}</p>
        <p class="m-4" > <span class="font-bold ">SCHOOL: </span> ${intern.school} </p>
      </div>
    </div>
    <script src="https://kit.fontawesome.com/b87301694e.js" crossorigin="anonymous"></script>


        `
}


teamCardArr.push(
    profiles
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => createIntern(intern))
)





return teamCardArr.join('')

}
























module.exports = (profiles) =>{

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
    href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
    rel="stylesheet"
  />
    <title>Document</title>
</head>
<body>
<div class="bg-red-500 min-w-full text-center">
          <h1 class="min-h-300 text-white font-semibold p-20 text-5xl">MY TEAM</h1>
        </div>
        <div class="cardContainer bg-white flex flex-row flex-wrap min-h-full items-center justify-center ">
          
    
${generateCard(profiles)}
</body>
</html>
    `
}