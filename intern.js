class intern {
    constructor (name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

getName() {
    return this.name;
}
getId() {
    return this.id;
}
getEmail() {
    return this.name;
}
getSchool() {
    return this.school;
}
}

module.exports = intern;