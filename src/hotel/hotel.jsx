import React, {useEffect, useState} from 'react';

import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";

import 'react-dates/initialize';

import "./hotel.css";


class Hotel extends React.Component {
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

export default Hotel;
