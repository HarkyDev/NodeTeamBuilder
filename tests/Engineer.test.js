//Import Class
const Engineer = require("../lib/Engineer");

//TEST TO CREATE GENERAL OBJECT WITH THE CLASS
test('can we create a new object', () => {
    
    const isObject = new Engineer();
    expect(typeof(isObject)).toBe('object')
})

//TEST TO SEE IF WE CAN CREATE AN OBJECT WITH OUR "NAME" PARAM
test('can we add a name to this object', () => {
    const name = 'user'
    const newName = new Engineer(name)

    expect(newName.name).toBe(name)
}

)
//TEST TO SEE IF WE CAN CREATE AN OBJECT WITH OUR "ID" PARAM
test('can we add an ID to this object', () => {
    const id = '44544'
    const newId = new Engineer("name",id)

    expect(newId.id).toBe(id)
}

)
//TEST TO SEE IF WE CAN CREATE AN OBJECT WITH OUR "EMAIL" PARAM
test('can we add an email to this object', () => {
    const email = 'example@gmail.com'
    const newEmail = new Engineer("name","id",email)

    expect(newEmail.email).toBe(email)
}

)

//TEST TO SEE IF WE CAN CREATE AN OBJECT WITH OUR "gitHub PARAM
test('can we add a gitHub username  to this object', () => {
    const gitHub = 'MistergitHuber'
    const newgitHub = new Engineer("name","id","email",gitHub)

    expect(newgitHub.gitHub).toBe(gitHub)
}

)

//TEST TO SEE IF WE CAN CREATE AN OBJECT WITH EMPLOYEE CLASS THAT CONTAINS ALL THREE PARAMS OF THE CLASS: "NAME , ID, EMAIL, gitHub"
test('can we create an object that holds all four params that we want to input', () => {
    const name = 'user'
    const id = '44544'
    const email = 'example@gmail.com'
    const gitHub = 'MistergitHuber'
    const newEngineerObject = new Engineer(name,id,email,gitHub)
    expect(newEngineerObject.name).toBe(name)
    expect(newEngineerObject.id).toBe(id)
    expect(newEngineerObject.email).toBe(email)
    expect(newEngineerObject.gitHub).toBe(gitHub)
}

)

