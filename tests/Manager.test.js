//Import Class
const Manager = require("../lib/Manager");

//TEST TO CREATE GENERAL OBJECT WITH THE CLASS
test('can we create a new object', () => {
    
    const isObject = new Manager();
    expect(typeof(isObject)).toBe('object')
})

//TEST TO SEE IF WE CAN CREATE AN OBJECT WITH OUR "NAME" PARAM
test('can we add a name to this object', () => {
    const name = 'user'
    const newName = new Manager(name)

    expect(newName.name).toBe(name)
}

)
//TEST TO SEE IF WE CAN CREATE AN OBJECT WITH OUR "ID" PARAM
test('can we add an ID to this object', () => {
    const id = '44544'
    const newId = new Manager("name",id)

    expect(newId.id).toBe(id)
}

)
//TEST TO SEE IF WE CAN CREATE AN OBJECT WITH OUR "EMAIL" PARAM
test('can we add an email to this object', () => {
    const email = 'example@gmail.com'
    const newEmail = new Manager("name","id",email)

    expect(newEmail.email).toBe(email)
}

)

//TEST TO SEE IF WE CAN CREATE AN OBJECT WITH OUR "OFFICENO" PARAM
test('can we add an office number to this object', () => {
    const officeNo = '1977412'
    const newOfficeNo = new Manager("name","id","email",officeNo)

    expect(newOfficeNo.officeNo).toBe(officeNo)
}

)

//TEST TO SEE IF WE CAN CREATE AN OBJECT WITH EMPLOYEE CLASS THAT CONTAINS ALL THREE PARAMS OF THE CLASS: "NAME , ID, EMAIL, OFFICENO"
test('can we create an object that holds all three params that we want to input', () => {
    const name = 'user'
    const id = '44544'
    const email = 'example@gmail.com'
    const officeNo = '1977412'
    const newManagerObject = new Manager(name,id,email,officeNo)
    expect(newManagerObject.name).toBe(name)
    expect(newManagerObject.id).toBe(id)
    expect(newManagerObject.email).toBe(email)
    expect(newManagerObject.officeNo).toBe(officeNo)
}

)

