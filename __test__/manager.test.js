// const { SnapshotFormat } = require('@jest/schemas');
const Manager = require('../lib/manager');
const manager = new Manager('sasha', '070996' , 'sashacodes@codes.com' , '321' );

test('test the constructor for the manager object', () => {
    expect(manager.name).toBe('sasha');
    expect(manager.id).toBe('070996');
    expect(manager.email).toBe('sashacodes@codes.com');
    expect(manager.officeNumber).toBe();
});



test('testing using the getName()', () => {
    expect(manager.getName()).toBe('sasha');
});

test('testing using the getId()', () => {
    expect(manager.getId()).toBe('070996');
});

test('testing using the getEmail()', () => {
    expect(manager.getEmail()).toBe("sashacodes@codes.com");
    // return "sashacodes@codes.com";
});

test('testing getOfficeNumber()', () => {
    expect (manager.getOfficeNumber()).toBe("321");
});


