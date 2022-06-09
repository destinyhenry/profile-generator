const Manager = require('./Manager');
const manager = new Manager('Sasha', '070996' , 'sashacodes@codes.com' , '321' );

test('test the constructor for the manager object', () => {
    expect(manager.name).toBe('sasha');
    expect(manager.id).toBe('070996');
    expect(manager.email).toBe('sashacodes@codes.com');
    expect(manager.officeNumber).toBe('321');
});

test('testing using the getName()', () => {
    expect(manager.getName()).toBe('sasha');
});

test('testing using the getId()', () => {
    expect(manager.getId()).toBe('070996');
});

test('testing using the getEmail()', () => {
    expect(manager.getEmail()).toBe('sashacodes@codes.com');
});

test('testing using the getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toBe('321');
});


