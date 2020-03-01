import React, {useEffect, useState} from 'react';

import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import "./pLine.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import PriceLineMain from "../priceLine-main/priceLineMain";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




class PriceLine extends React.Component {

    constructor() {
        super();
        this.state={
            sty: ".1px solid black"

        }
    }


    render = () => {


        return (
            <div >
                <Container>
                    <Row>
                        <Col>
                            <Row className="adj-b">
                                <Col md={3} className="adj-left-top"><p className="adj-left">LEAP YEAR CRUISE SALE!</p></Col>
                                <Col md={9}><p className="adj-left">Set sail with up to $2000 to spend at sea!</p></Col>
                            </Row>

                            <Row>
                                <Col className="adj-col">
                                    <Navbar collapseOnSelect expand="lg" bg="white" >
                                        <Navbar.Brand className="pLine-price" href="#home">Priceline</Navbar.Brand>
                                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                        <Navbar.Collapse id="responsive-navbar-nav">
                                            <Nav className="mr-auto">
                                                <Nav.Link href="#features">Hotels</Nav.Link>
                                                <Nav.Link href="#pricing">Cars</Nav.Link>
                                                <Nav.Link href="#features">Flights</Nav.Link>
                                                <Nav.Link href="#features">Packages</Nav.Link>
                                                <Nav.Link href="#features">Cruises</Nav.Link>
                                            </Nav>
                                            <Nav>
                                                <Nav.Link href="#deets">  <NavDropdown className="adj-color2" title="Sign in" id="collasible-nav-dropdown">
                                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                                </NavDropdown></Nav.Link>
                                                <Nav.Link eventKey={2} href="#memes" className="adj-color2" >
                                                    <NavDropdown title="Find My Trips" >
                                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                        <NavDropdown.Divider />
                                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav.Link>
                                                {/*<Nav.Link eventKey={2} href="#memes">*/}
                                                {/*    <NavDropdown title="Help" id="coll">*/}
                                                {/*        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                                                {/*        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                                                {/*        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                                                {/*        <NavDropdown.Divider />*/}
                                                {/*        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                                                {/*    </NavDropdown>*/}
                                                {/*</Nav.Link>*/}
                                            </Nav>
                                        </Navbar.Collapse>
                                        <Nav.Link eventKey={2} href="#memes">
                                            <NavDropdown title="Help" id="coll">
                                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav.Link>
                                    </Navbar>
                                </Col>
                            </Row>

                        </Col>


                    </Row>

                    <Row>
                        <Col className="adj-col">
                            <div className="adj-img adj-col">

                           <PriceLineMain/>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col className="adj-col">

                            <div>
                                <FontAwesomeIcon icon={faHome} />
                            </div>
                        </Col>
                    </Row>


                </Container>

            </div>
        );
    }

};

export default PriceLine;
