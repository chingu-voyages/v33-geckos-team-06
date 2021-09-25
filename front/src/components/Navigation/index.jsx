import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav } from 'react-bootstrap'
import "./index.css"
import logo from "../../images/gekch-logo.png"

export default class Navigation extends Component {
    render() {
        return (
            <div>
                {/* expand:在小于md时候collapse，variant:字体颜色 fixed:固定上方*/}
                <Navbar className="nav" variant="light" expand="sm" fixed="top">

                    <Navbar.Brand id="brand" href="/homepage">
                        <img width="30"
                            height="30"
                            // className="d-inline-block align-top"
                            id="brandLogo" 
                            alt="icon" src={logo} />
                        Gekch.io</Navbar.Brand>





                    <Nav.Item >
                        <Nav.Link className="inactive" href="/Browse-page">Browse Games</Nav.Link>
                    </Nav.Item>

                    {/* me-auto: margin end-auto*/}
                    <Nav.Item className="me-auto">
                        <Nav.Link className="inactive" href="/Upload-games">Upload Games</Nav.Link>
                    </Nav.Item>


                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    {/* expand必须和toggle，collapse同时用 */}
                    <Navbar.Collapse expand="md" id="basic-navbar-nav" className="justify-content-end">
                        {
                            localStorage.getItem('data') ? 
                            <React.Fragment>
                                {JSON.parse(localStorage.data).user.email} | <Nav.Link href="/" onClick={() => {localStorage.clear()}}>Sign Out</Nav.Link>
                            </React.Fragment>
                                
                            :
                                <React.Fragment>
                                    <Nav.Link href="/sign-in">Sign in</Nav.Link>
                                    <Nav.Link href="/sign-up">Sign up</Nav.Link>
                                </React.Fragment>
                        }
                    </Navbar.Collapse>


                </Navbar>





            </div>

        )
    }
}
