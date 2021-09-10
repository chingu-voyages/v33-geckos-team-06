import "./index.css"
//import logo from './gekch-logo.png';
import logo from '../../images/gekch-logo.png';


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






export default index
