//Import Class
const Intern = require("../lib/Intern");

//TEST TO CREATE GENERAL OBJECT WITH THE CLASS
test('can we create a new object', () => {
    
    const isObject = new Intern();
    expect(typeof(isObject)).toBe('object')
})

//TEST TO SEE IF WE CAN CREATE AN OBJECT WITH OUR "NAME" PARAM
test('can we add a name to this object', () => {
    const name = 'user'
    const newName = new Intern(name)

    expect(newName.name).toBe(name)
}

)
//TEST TO SEE IF WE CAN CREATE AN OBJECT WITH OUR "ID" PARAM
test('can we add an ID to this object', () => {
    const id = '44544'
    const newId = new Intern("name",id)

    expect(newId.id).toBe(id)
}

)
//TEST TO SEE IF WE CAN CREATE AN OBJECT WITH OUR "EMAIL" PARAM
test('can we add an email to this object', () => {
    const email = 'example@gmail.com'
    const newEmail = new Intern("name","id",email)

    expect(newEmail.email).toBe(email)
}

)

//TEST TO SEE IF WE CAN CREATE AN OBJECT WITH OUR "OFFICENO" PARAM
test('can we add a school field to this object', () => {
    const school = 'University of Example'
    const newSchool = new Intern("name","id","email",school)

    expect(newSchool.school).toBe(school)
}

)

//TEST TO SEE IF WE CAN CREATE AN OBJECT WITH EMPLOYEE CLASS THAT CONTAINS ALL THREE PARAMS OF THE CLASS: "NAME , ID, EMAIL, OFFICENO"
test('can we create an object that holds all three params that we want to input', () => {
    const name = 'user'
    const id = '44544'
    const email = 'example@gmail.com'
    const school = 'University of Example'
    const newInternObject = new Intern(name,id,email,school)
    expect(newInternObject.name).toBe(name)
    expect(newInternObject.id).toBe(id)
    expect(newInternObject.email).toBe(email)
    expect(newInternObject.school).toBe(school)
}

)

