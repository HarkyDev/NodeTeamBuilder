const Employee = require('./Employee')

class Manager extends Employee {
    constructor(id, name, email, officeNo){
        super(id, name, email)
        this.officeNo = officeNo
    }

    getOfficeNumber() {
        return this.officeNo
    }

    getRole () {
        return 'Manager'
    }
};

module.exports = Manager;