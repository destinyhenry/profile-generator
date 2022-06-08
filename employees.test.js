const Employee = require('')
const employee = new Employee('Sasha', '070996', 'sashacodes@codes.com');

test ('testing employee constructor', () => {
    expect(employee.name).toBe('Sasha');
    expect(employee.id).toBe('070996');
    expect(employee.email).toBe('sashacodes@codes.com');
});
