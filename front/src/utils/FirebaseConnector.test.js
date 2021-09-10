import { InitializeFirebase, CreateUserWithEmailAndPassword, SignInWithEmailAndPassword } from './FirebaseConnector';

test('login with email: test@email.com and password: password, returns user', () => {
    InitializeFirebase();

    let loginUser = {};
    SignInWithEmailAndPassword('test@email.com', 'password').then( (user) => {
        loginUser = user;

        expect(loginUser).not.toBeNull();
        expect(loginUser).not.toBeUndefined();
    });

});

test('login with invalid email format, email: test and password: password, returns error', () => {
    InitializeFirebase();

    let returnValue = {};
    SignInWithEmailAndPassword('test', 'password').then( (user) => {
        returnValue = user;

        expect(returnValue).not.toBeNull();
        expect(returnValue).not.toBeUndefined();
        expect(returnValue.code).not.toBeUndefined();
        expect(returnValue.code).toMatch('auth/invalid-email');
        expect(returnValue.message).not.toBeUndefined();
    });

});


test('login with invalid password, email: test@email.com and password: 123, returns error', () => {
    InitializeFirebase();

    let returnValue = {};
    SignInWithEmailAndPassword('test@email.com', '123').then( (user) => {
        returnValue = user;

        expect(returnValue).not.toBeNull();
        expect(returnValue).not.toBeUndefined();
        expect(returnValue.code).not.toBeUndefined();
        expect(returnValue.message).not.toBeUndefined();
    });

});