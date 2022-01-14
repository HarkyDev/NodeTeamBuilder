const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(id, name, email, gitHub){
        super(id, name, email)
        this.gitHub = gitHub
    }

    getGithub() {
        return this.github
    }

    getRole () {
        return 'Engineer'
    }
};

module.exports = Engineer;