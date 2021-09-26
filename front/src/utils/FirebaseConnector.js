import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, addDoc } from 'firebase/firestore/lite';
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
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

    // const appCheck = initializeAppCheck(app, {
    //     provider: new ReCaptchaV3Provider('6Lc_P40cAAAAAISkdt6rK6Lp56KK7N0sXo4BPdWg'),
      
    //     // Optional argument. If true, the SDK automatically refreshes App Check
    //     // tokens as needed.
    //     isTokenAutoRefreshEnabled: true
    //   });
    
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

const uploadFiles = async (files) => {
    let currentUser = getAuth().currentUser();
    console.log(`uploadFiles - current user ${getAuth().currentUser()}`);

    if (currentUser === null) {
        console.log(`uploadFiles - Not logged in.`);
        return false;
    }

    let imageArray = [];
    let images = [];
    let nonImages = [];
    files?.map( (f) => {
        if (f.type.split('/')[0] === 'image') {
            imageArray.push(f);
        }
        else {
            nonImages.push(f);
        }
    });

    const storage = getStorage();

    imageArray?.map( async (i) => {
        let link = JSON.parse(localStorage.data).user.uid + '/' + i.name;
        console.log(`link - ${link}`);
        let fileRef = ref(storage, link);
        let snap = await uploadBytes(fileRef, i);
        images.push(link);
        console.log(`Images - ${images}`)
    });
    return images;
}

const CreateGame = async (gameDetails) => {
    // game, description, genre, platform, price, access, files, projectType, releaseStatus

    // Upload files
    // add zip to 'download_link'
    // add images to 'images'

    // let expectedResults = {
    //     author: "Creator Author",
    //     author_id: "test1",
    //     description: "Game Description",
    //     download_link: "gamelink",
    //     genre: "puzzle",
    //     images: ["imageurl"],
    //     platform: [
    //         "windows",
    //         "mac",
    //         "android",
    //         "ios",
    //         "linux"
    //     ],
    //     price: 0,
    //     title: "Creator Game"
    // }

    // const data = {
    //     game: game,
    //     description: description,
    //     genre: genre,
    //     dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
    //     arrayExample: [5, true, "hello"],
    //     nullExample: null,
    //     objectExample: {
    //         a: 5,
    //         b: {
    //             nested: "foo"
    //         }
    //     }
    // };
    // await setDoc(doc(db, "data", "one"), data);


    const { accessOptions, projectTypeOptions, genreOptions, releaseStatusOptions, files, ...details} = gameDetails;
    console.log(`Details ${JSON.stringify(details)}`);


    let currentUser = JSON.parse(localStorage.data).user;
    console.log(`uploadFiles - current user ${ currentUser }`);
    
    if (currentUser === null) {
        console.log(`uploadFiles - Not logged in.`);
        return false;
    }

    let imageArray = [];
    var images = [];
    let nonImages = [];
    let downloadFiles = [];




    files?.map( (f) => {
        if (f.type.split('/')[0] === 'image') {
            imageArray.push(f);
        }
        else {
            nonImages.push(f);
        }
    });

    const storage = getStorage();

    // Upload images
    let res = await Promise.all( imageArray?.map( async (i) => {
        let link = JSON.parse(localStorage.data).user.uid + '/' + i.name;
        console.log(`link - ${link}`);
        let fileRef = ref(storage, link);
        let snap = await uploadBytes(fileRef, i);
        images.push(link);
        console.log(`Images - ${images}`);
        return images;
    }) );
    console.log(`res - ${res}`);

    // Upload non-images
    let res2 = await Promise.all( nonImages?.map( async (i) => {
        let link = JSON.parse(localStorage.data).user.uid + '/' + i.name;
        console.log(`link - ${link}`);
        let fileRef = ref(storage, link);
        let snap = await uploadBytes(fileRef, i);
        downloadFiles.push(link);
        console.log(`Non-images - ${downloadFiles}`);
        return downloadFiles;
    }) );
    console.log(`res2 non-images - ${res2}`);


    console.log(`images - ${images}`);
    
    const gameRef = await addDoc(collection(db, "games"), {...details, ...{download_files: downloadFiles}, ...{images: images}, ...{author: currentUser.email}});
    console.log(`images - ${images}`);
    console.log(`download files - ${downloadFiles}`);
    console.log(`addedGame - ${gameRef.id}`);

    return;




    // 'file' comes from the Blob or File API
    // uploadBytes(fileRef, gameDetails.files[0]).then((snapshot) => {
    //     console.log(`Uploaded a blob or file! - ${gameDetails.files[0].name}`);

    //     const ref = await addDoc(collection(db, "games");


        // Create game doc
        // Add a new document with a generated id.
        // game, description, genre, platform, price, access, files, projectType, releaseStatus
        //const { game, description, genre, platform, price, access, files, projectType, releaseStatus, ...exclude } = gameDetails;
        // const ref = await addDoc(collection(db, "games"), 
        // );
        // console.log("Document written with ID: ", docRef.id);

    //     return true;
    // });
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

const GetLink = async (link) => {
    const storage = getStorage();
    let ret = await getDownloadURL(ref(storage, link));
    return ret;
}

export {
    InitializeFirebase,
    CreateUserWithEmailAndPassword,
    SignInWithEmailAndPassword,
    CreateGame,
    GetGames,
    GetFeaturedGames,
    GetLink
};