import React, {useEffect, useState} from 'react';

import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Icon} from 'rsuite';
import {Modal} from 'rsuite';

import 'rsuite/dist/styles/rsuite-default.css';
import {MDBCol, MDBIcon} from "mdbreact";


import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'rsuite';


import "./cars.css";
import FormControl from "react-bootstrap/FormControl";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ReservationDetails from "../reservation-details/reservation-details";
import Input from "rsuite/es/Input";
import Checkbox from "rsuite/es/Checkbox";


class Car extends React.Component {
    constructor() {
        super();

    }
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users').then((result)=>result.json())
            .then(res=>console.log(res));
    }

    render = () => {
        return (
            <div className="">
                <Container>
                    <form>

                        <Row>
                            <Col>
                                <div className="">
                                    {/*<Form.Control type="text" placeholder="where to?"/>*/}
                                    <MDBCol className="block-search" md="6">
                                        <div className=" adj-search-height input-group md-form form-sm form-1 pl-0">
                                            <div className="input-group-prepend">
                                              <span className="input-group-text purple lighten-3" id="basic-text1">
                                                <MDBIcon className="text-white" icon="search"/>
                                              </span>
                                            </div>
                                            <input className=" adj-input form-control my-0 py-1" type="text" placeholder="Search"
                                                   aria-label="Search"/>
                                        </div>
                                    </MDBCol>


                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <DateRangePicker placeholder="Check-in - Check-out"/>

                            </Col>
                            <Col className="reservation">
                                <div>
                                    <ReservationDetails/>
                                </div>
                            </Col>
                            <Col>
                                <div className="">
                                    <Button variant="primary" className="adj-submit-button" type="submit">
                                        Search
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Col xs>


                                    <Checkbox/>

                                    </Col>
                                    <Col xs>

                                    <Checkbox/>

                                    </Col>

                                </Row>



                            </Col>


                        </Row>
                    </form>

                </Container>
            </div>
        );
    }
};

export default Car;
