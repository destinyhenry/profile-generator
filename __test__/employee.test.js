const Employee = require('../lib/employee')
const employee = new Employee('sasha', '070996', 'sashacodes@codes.com');


test ('testing employee constructor', () => {
expect(employee.name).toBe('sasha');
expect(employee.id).toBe('070996');
expect(employee.email).toBe('sashacodes@codes.com');
});

    test('testing getName()', () => {
        expect (employee.getName()).toBe('sasha');
    });
    test('testing getId()', () => {
        expect (employee.getId()).toBe('070996');
    });
    test('testing getEmail()', () => {
        expect (employee.getEmail()).toBe("sashacodes@codes.com");
    });
    
