import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
<<<<<<< HEAD
import { Form, Button} from "react-bootstrap"
import "./index.css"
import { SignInWithEmailAndPassword } from '../../utils/FirebaseConnector'


export default class Main extends Component {

    alertMessage=(username)=>{
        

            alert( `Hello ${username}, you are logged in`)
        

    };

    validateEmail =(email)=> {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
 
    
    render() {
        
=======
import { Form, Button } from "react-bootstrap"
import "./index.css"

export default class Main extends Component {
    render() {
>>>>>>> set up the login page
        return (
            <div id="formBox">
                <Form action="" id="form" >
                    <div id="startingWord"><h4>Login to your Gekch.io account</h4></div>

                    <Form.Group className="mb-3" id="username">
                        <Form.Label>Username or Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter username here"
                            ref={(currentNode) =>{this.email =currentNode}}>
                                
                            </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" id="password" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password here"
                            ref={(currentNode)=>{this.password = currentNode}}></Form.Control>
                    </Form.Group>
                   
                    <Button id="loginButton" variant="danger" onClick={
                        async ()=>{
                            try{
                                // test email if valid
                                const emailIsValid = this.validateEmail(this.email.value)
                                
                                if(!emailIsValid) {throw (`${this.email.value} is not an email, try again`)}
                                 

                                //wait for the backend to test the credentials
                                const response = await SignInWithEmailAndPassword(this.email.value,this.password.value);
                                

                                //if nothing went wrong, print out welcome word
                                this.alertMessage(this.email.value)
                              
                            }
                            catch(e){
                                alert(e)
                            }
                        
                        
                    }}> Login </Button>

                    <Form.Group className="mb-3">
                        <span>or
                        {" "}
                        <a href="/sign-up" className="inactive">Create account</a>
                    </span> 
                    </Form.Group>



                </Form>
            </div>
        )
    }
}
