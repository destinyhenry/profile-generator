const Engineer = require('../lib/engineer');
const engineer = new Engineer('sasha', '070996' , 'sashacodes@codes.com' , 'sashacodes@github.com' );

test ('testing engineer constructor', () => {
expect(engineer.name).toBe('sasha');
expect(engineer.id).toBe('070996');
expect(engineer.email).toBe('sashacodes@codes.com');
expect(engineer.github).toBe('sashacodes@github.com');
});

test('testing using the getName()', () => {
    expect(engineer.getName()).toBe('sasha');
});

test('testing using the getId()', () => {
    expect(engineer.getId()).toBe('070996');
});

test('testing using the getEmail()', () => {
    expect(engineer.getEmail()).toBe("sashacodes@codes.com");

});

test('testing using the getGithub()', () => {
    expect(engineer.getGithub()).toBe("sashacodes@github.com");
});


