//const Employee = require("../lib/Employee");

function generateCard (profiles){

const teamCardArr = [];

function createManager(manager){
    console.log(manager)
        return `
            <div>
            name ${manager.name}
            name ${manager.id}
            name ${manager.getOfficeNo}
            name ${manager.email}
            </div>
        `
    

}

teamCardArr.push(
    profiles
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => createManager(manager))
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
    <title>Document</title>
</head>
<body>
    
${generateCard(profiles)}
</body>
</html>
    `
}