const Employee = require("../lib/Employee");

test('can we create a new object', () => {
 
    const isObject = new Employee();
    expect(typeof(isObject)).toBe('object')
})

test('can we add a name', () => {
    const name = 'user'
    const newName = new Employee(name)

    expect(newName.name).toBe(name)
}

)