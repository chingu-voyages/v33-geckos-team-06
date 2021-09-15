import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

let app = null;
let db = null;

const InitializeFirebase = () => {
    // TODO: Replace the following with your app's Firebase project configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBeU2p7rpAu1nUiWYlbV4R7y9A1CYtoMiw",
        authDomain: "gekchio.firebaseapp.com",
        projectId: "gekchio",
        storageBucket: "gekchio.appspot.com",
        messagingSenderId: "545190063381",
        appId: "1:545190063381:web:b23b157c7dc9c00450cd1c"
    };
    
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    if (app && db)
        return true;

    return false;
}

const CreateUserWithEmailAndPassword = async  (email, password) => {
    // EXAMPLE:
    // InitializeFirebase();
    // let newUser = {};
    // CreateUserWithEmailAndPassword('test4@email.com', 'password').then( (user) => {
    //   newUser = user;
    //   console.log(`User - ${JSON.stringify(newUser)}`);
    // });

    const auth = getAuth();
    let returnValue = {};

    let user = await createUserWithEmailAndPassword(auth, email, password)
                        .catch( (error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            
                            returnValue = error;
                            return returnValue;
                        });
    return user;
}

const SignInWithEmailAndPassword = async (email, password) => {
    //EXAMPLE:
    // InitializeFirebase();
    // CreateUserWithEmailAndPassword(...)
    // ...
    // let loginUser = {};
    // SignInWithEmailAndPassword('test4@email.com', 'password').then( (user) => {
    //   loginUser = user;
    //   console.log(`User - ${JSON.stringify(loginUser)}`);
    // });
    
    const auth = getAuth();
    let returnValue = {};

    let user = await signInWithEmailAndPassword(auth, email, password)
                        .catch( (error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            
                            returnValue = error;
                            throw returnValue;
                        });
    return user;
}

const GetGames = async () => {
    
    const games = collection(db, 'games');
    const gamesSnapshot = await getDocs(games);
    const gamesList = gamesSnapshot.docs.map(doc => doc.data());

    return gamesList;
}

const GetFeaturedGames = async () => {
    
    const games = collection(db, 'featured_games');
    const gamesSnapshot = await getDocs(games);
    const gamesList = gamesSnapshot.docs.map(doc => doc.data());

    return gamesList;
}

export {
    InitializeFirebase,
    CreateUserWithEmailAndPassword,
    SignInWithEmailAndPassword,
    GetGames,
    GetFeaturedGames
};