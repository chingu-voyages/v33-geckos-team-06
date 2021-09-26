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
import { CreateGame } from '../../utils/FirebaseConnector';
import { withRouter } from 'react-router';
class index extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            game: '',
            access: 'public',
            accessOptions: [
                {name: 'draft', value: 'draft'},
                {name: 'public', value: 'public'},
                {name: 'restricted', value: 'restricted'}
            ],
            files: [],
            projectType: [],
            projectTypeOptions: [
                {name: 'Choose Project Type', value: ''},
                {name: 'downloadable', value: 'downloadable'}
            ],
            genre: [],
            genreOptions: [ 
                // TODO - Pull from database
                {name: 'adventure', value: 'adventure'}, 
                {name: 'horror', value: 'horror'}, 
                {name: 'fps', value: 'fps'}, 
                {name: 'rts', value: 'rts'}, 
                {name: 'rpg', value: 'rpg'}
            ],
            releaseStatus: 'released',
            releaseStatusOptions: [
                {name: 'released', value: 'released'}, 
                {name: 'beta', value: 'beta'}, 
            ]

        }
    }

    addFile = (event) => {

        this.setState( (prev) => {
            console.log([...event.target.files])
            return {
                ...prev,
                files: [...event.target.files]
            }
        })
    }

    onGameTitleChange = (e) => {
        this.setState( (p) => {
            return {
                ...p,
                game: e.target.value
            }
        });
    }

    onGameDescriptionChange = (e) => {
        this.setState( (p) => {
            return {
                ...p,
                description: e.target.value
            }
        });
    }

    onSelectedAccessChange = (e) => {
        this.setState( (p) => {
            return {
                ...p,
                access: Array.from(e.target.selectedOptions, o => o.value)
            }
        });
    }

    onSelectedProjectTypeChange = (e) => {
        this.setState( (p) => {
            return {
                ...p,
                projectType: Array.from(e.target.selectedOptions, o => o.value)
            }
        });
    }

    onSelectedGenreOptionsChange = (e) => {
        this.setState( (p) => {
            return {
                ...p,
                genre: Array.from(e.target.selectedOptions, o => o.value)
            }
        });
    }

    onReleaseStatusOptionsChange = (e) => {
        this.setState( (p) => {
            return {
                ...p,
                releaseStatus: e.target.value
            }
        });
    }

    createGame = (details) => {
        CreateGame(details).then( () => {
            alert('Successfully added a new project');
            this.props.history.push('/browse-page');
        }
        );
    }

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
                                <Form.Control onChange={this.onGameTitleChange}   />
                            </Form.Group>

                            {/* <Form.Group className="mb-3">
                                <Form.Label>Project URL</Form.Label>
                                <Form.Control   placeholder="https://username.gekch.io/" />
                            </Form.Group> */}

                            <Form.Group className="mb-3">
                                <Form.Label>Short description or tagline</Form.Label>
                                <Form.Control onChange={this.onGameDescriptionChange} />
                            </Form.Group>
                            

                            <Form.Group className="mb-3">
                                <Form.Label>Uploads</Form.Label>
                                <Form.Control type="file" multiple
                                    accept="image/png, image/gif, image/jpg, image/jpeg, application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed"
                                    onChange={this.addFile} 
                                />
                                <ul>
                                {
                                    this.state?.files?.map( (e) => {
                                        return <li>{e.name}</li>
                                    })  
                                }
                                </ul>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label> Kind of project</Form.Label>
                                <Form.Control as="select" onChange={this.onSelectedProjectTypeChange}>
                                    {
                                        this.state.projectTypeOptions.map( options => (
                                            <option key={options.name} name={options.name} value={options.value}>
                                                {options.name}
                                            </option>
                                        ))
                                    }
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Release status</Form.Label>
                                <Form.Select  onChange={this.onReleaseStatusOptionsChange}>
                                    {
                                        this.state.releaseStatusOptions.map(options => (
                                            <option key={options.name} name={options.name} value={options.value}>
                                                {options.name}
                                            </option>
                                            ))
                                    }
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Genre</Form.Label>

                                <Form.Control as="select" multiple  onChange={this.onSelectedGenreOptionsChange}>
                                    {this.state.genreOptions.map(options => (
                                    <option key={options.name} name={options.name} value={options.value}>
                                        {options.name}
                                    </option>
                                    ))}
                                </Form.Control>

                                {/* <Form.Select multiple>
                                    
                                    <option value="action">Action</option>
                                    <option value="adventure">Adventure</option>
                                    <option value="horror">Horror</option>
                                    <option value="fps">FPS</option>
                                    <option value="rts">RTS</option>
                                    <option value="rpg">RPG</option>
                                </Form.Select> */}
                            </Form.Group>

                            {/* <Form.Group className="mb-3">
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

                            </Form.Group> */}

                            <div id="finalButton">
                                <Button variant="danger" size="lg" onClick={() => {this.createGame(this.state) }}>Save and view page</Button>
                            </div>

                            

                        </div>
                    </Form>
                </Col>

            </Row>
        )
    }
}

export default withRouter(index);