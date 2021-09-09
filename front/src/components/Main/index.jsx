import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Form, Button } from "react-bootstrap"
import "./index.css"

export default class Main extends Component {
    render() {
        return (
            <div id="formBox">
                <Form action="" id="form" >
                    <div id="startingWord"><h4>Login to your Gekch.io account</h4></div>

                    <Form.Group className="mb-3" id="username">
                        <Form.Label>Username or Email</Form.Label>
                        <Form.Control placeholder="Enter username here"></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" id="password" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control placeholder="Enter your password here"></Form.Control>
                    </Form.Group>

                    <Button id="loginButton" variant="danger"> Login </Button>

                    <Form.Group className="mb-3">
                        <span>or
                        {" "}
                        <a href="/signup" className="inactive">Create account</a>
                    </span> 
                    </Form.Group>



                </Form>
            </div>
        )
    }
}
