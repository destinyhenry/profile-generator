const Intern = require('../lib/intern')
const intern = new Intern('sasha', '070996' , 'sashacodes@codes.com' , 'Coding Uni' );

test ('testing intern constructor', () => {
expect(intern.name).toBe('sasha');
expect(intern.id).toBe('070996');
expect(intern.email).toBe('sashacodes@codes.com');
expect(intern.school).toBe('Coding Uni');
});

test('testing using the getName()', () => {
    expect(intern.getName()).toBe('sasha');
});

test('testing using the getId()', () => {
    expect(intern.getId()).toBe('070996');
});

test('testing using the getEmail()', () => {
    expect(intern.getEmail()).toBe('sashacodes@codes.com');
});

test('testing using the getSchool()', () => {
    expect(intern.getSchool()).toBe('Coding Uni');
});
