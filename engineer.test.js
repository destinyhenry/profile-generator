const Engineer = require('./Engineer');
const Engineer = require('./Engineer');
const Engineer = new Engineer('Sasha', '070996' , 'sashacodes@codes.com' , 'Coding Uni' );

expect(intern.name).toBe('Sasha');
expect(intern.id).toBe('070996');
expect(intern.email).toBe('Sashacodes@codes.com');
expect(intern.github).toBe('sashacodes@github.com');


test('testing using the getName()', () => {
    expect(Engineer.getName()).toBe('sasha');
});

test('testing using the getId()', () => {
    expect(Engineer.getId()).toBe('070996');
});

test('testing using the getEmail()', () => {
    expect(Engineer.getEmail()).toBe('sashacodes@codes.com');
});

test('testing using the getOfficeNumber()', () => {
    expect(Engineer.getOfficeNumber()).toBe('321');
});