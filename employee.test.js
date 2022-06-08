const Employee = require('./Employee')
const employee = new Employee('Sasha', '070996', 'sashacodes@codes.com');

test ('testing employee constructor', () => {
    expect(employee.name).toBe('Sasha');
    expect(employee.id).toBe('070996');
    expect(employee.email).toBe('sashacodes@codes.com');
});
    test('testing getName()', () => {
        expect (employee.getName()).toBe('Sasha');
    });
    test('testing getId()', () => {
        expect (employee.getId()).toBe('070996');
    });
    test('testing getEmail()', () => {
        expect (employee.getEmail()).toBe('sashacodes@codes.com');
    });
