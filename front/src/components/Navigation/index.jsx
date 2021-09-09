import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav } from 'react-bootstrap'
import "./index.css"

export default class Navigation extends Component {
    render() {
        return (
            <div>
                {/* expand:在小于md时候collapse，variant:字体颜色 fixed:固定上方*/}
                <Navbar className="nav" variant="light" expand="sm" fixed="top">

                    <Navbar.Brand id="brand" href="/homepage">
                        {/* <img alt="icon" src=""/> */}
                        Gekch.io</Navbar.Brand>

                    


                    
                        <Nav.Item >
                            <Nav.Link className="inactive" href="/Browse Games">Browse Games</Nav.Link>
                        </Nav.Item>

                        {/* me-auto: margin end-auto*/}
                        <Nav.Item className="me-auto">
                            <Nav.Link  className="inactive" href="/Upload Games">Upload Games</Nav.Link>
                        </Nav.Item>
                    

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    {/* expand必须和toggle，collapse同时用 */}
                    <Navbar.Collapse expand="md" id="basic-navbar-nav" className="justify-content-end">
                        <Nav.Link href="/sign-in">Sign in</Nav.Link>
                        <Nav.Link href="/sign-up">Sign up</Nav.Link>

                    </Navbar.Collapse>


                </Navbar>





            </div>

        )
    }
}
