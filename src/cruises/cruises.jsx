import React, {useEffect, useState} from 'react';

import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import { Icon } from 'rsuite';
import { Modal } from 'rsuite';

import 'rsuite/dist/styles/rsuite-default.css';


import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'rsuite';


import "./cruises.css";


class Cruises extends React.Component {
    constructor() {
        super();
    }
    render = () => {
        return (
            <div className="">
                <Container>

                    <Row>
                        <Col>
                            <div className="">
                                <form>
                                    <Form.Control type="where" placeholder="where to" />

                                </form>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="">
                                <DateRangePicker  placeholder="Check-in - Check-out" />

                            </div>
                        </Col>
                        <Col>
                            <div className="">
                                <p>dsgsd</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="">
                                <p>dsgsd</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="">
                                <p>dsgsd</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="">
                                <p>dsgsd</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="">
                                <p>dsgsd</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

export default Cruises;
