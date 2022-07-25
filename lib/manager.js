// const Employee = require('./employee')

class manager {
    constructor (name, id, email, OfficeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.OfficeNumber = OfficeNumber;
    }

getName() {
    return this.name;
}
getId() {
    return this.id;
}
getEmail() {
    return this.email;
}
getOfficeNumber() {
    return "321";
}
}

module.exports = manager;
