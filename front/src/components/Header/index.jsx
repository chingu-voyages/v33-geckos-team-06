import "./index.css"
//import logo from './gekch-logo.png';
import logo from '../../images/gekch-logo.png';
import {getAuth, CreateUserWithEmailAndPassword} from 'firebase/auth';

const index = () => {
    return (
        
    <header className="app-header">
    <div className="left-header">    
       <img src={logo} alt="logo"/>
        <p className="title">Gekch.io</p>
        <div className="header1">Browse Games</div>
        <div classN="header1">Upload Games</div>
        <div class="header1">Dashbord</div>
    </div>    
    
    <div className="right-header"> 
        <p className="header2">Login</p>
        <p className="header2">Register</p>
    </div>
    </header>
     

    )
}
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

const CreateUserWithEmailAndPassword = async (email, password) => {



}

export default index
