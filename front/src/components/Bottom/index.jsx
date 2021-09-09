import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Nav } from "react-bootstrap"
import "./index.css"

export default class Bottom extends Component {
    render() {
        return (
            <section id="bottomBox">
                <Nav className="justify-content-end bottom">
                    <Nav.Item>
                        <Nav.Link className="inactive" href="/About">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  className="inactive" href="/TermsOfService">Term of Service</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  className="inactive" href="/Privacy">Privacy</Nav.Link>
                    </Nav.Item>
                </Nav>
            </section>
        )
    }
}
