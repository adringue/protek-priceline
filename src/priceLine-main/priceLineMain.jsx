import React, {useEffect, useState} from 'react';

import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import "./priceLineMain.css"

class PriceLineMain extends React.Component {

    constructor() {
        super();

    }


    render = () => {


        return (
            <div className="">
                <Container>

                    <Row>
                        <Col>
                            <div className="adj_new">
                                </div>



                        </Col>
                    </Row>


                </Container>

            </div>
        );
    }

};

export default PriceLineMain;
