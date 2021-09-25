import React, { Component } from 'react'
import { Form,  Row, Col, Button, Dropdown } from 'react-bootstrap'
import "./index.css"


//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarContent
} from "react-pro-sidebar"
import 'react-pro-sidebar/dist/css/styles.css';

export default class index extends Component {
    render() {
        return (
            <Row id="theRow">
                <Col id="sidebarCol">

                    <ProSidebar id="sidebar">
                        <SidebarHeader>
                            <h4>Popular Tags</h4>
                        </SidebarHeader>
                        <SidebarContent>
                            <Menu>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                            </Menu>
                        </SidebarContent>
                        <SidebarHeader>
                            <h4>Browse</h4>
                        </SidebarHeader>
                        <SidebarContent>
                            <Menu>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                            </Menu>
                        </SidebarContent>

                        <SidebarHeader>
                            <h4>Games by Price</h4>
                        </SidebarHeader>
                        <SidebarContent>
                            <Menu>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                            </Menu>
                        </SidebarContent>
                        <SidebarHeader>
                            <h4>Games by Price</h4>
                        </SidebarHeader>
                        <SidebarContent>
                            <Menu>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                                <MenuItem>Dashboard</MenuItem>
                            </Menu>
                        </SidebarContent>

                    </ProSidebar>

                </Col>


                <Col id="uploadForm">
                    <Form id="form" >
                        <h2>Creator Dashboard</h2>
                        <div id="innerForm">
                            <h1>Create a new project</h1>

                            <Form.Group className="mb-3">
                                <Form.Label>Title</Form.Label>
                                <Form.Control   />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Project URL</Form.Label>
                                <Form.Control   placeholder="https://username.gekch.io/" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Short description or tagline</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            

                            <Form.Group className="mb-3">
                                <Form.Label>Uploads</Form.Label>
                                <Form.Control type="file" size="md"/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label> Kind of project</Form.Label>
                                <Form.Select>
                                    <option value="downloadable">Downloadable - You only have files to be downloaded</option>
                                    <option value="item">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Release status</Form.Label>
                                <Form.Select>
                                    <option value="released">Released - Project is complete, but might receive some updates</option>
                                    <option value="item">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Genre</Form.Label>
                                <Form.Select>
                                    <option value="advanture">Adventure</option>
                                    <option value="item">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Visibility and access</Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Draft - only the owner can view the page"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Restricted - only owners and authorized people can view the page"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Public - anyone can view the page"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                />

                            </Form.Group>

                            <div id="finalButton"><Button variant="danger" size="lg">Save and view page</Button></div>

                            

                        </div>
                    </Form>
                </Col>

            </Row>
        )
    }
}
