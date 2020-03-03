import React, { useEffect, useState } from 'react';

import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./priceLineMain.css";

import Header from '../head/header';
import PriceLineTabs from '../priceline-tabs/priceline-tabs';

class PriceLineMain extends React.Component {
    constructor() {
        super();
    }
    render = () => {
        return (
            <div className="">
                <Container className="main-container">
                   
                                    <div className="adj_new_2  main">
                                        <Header />
                                        <PriceLineTabs />
                                    </div>
                                                                 



                </Container>
            </div>
        );
    }
};

export default PriceLineMain;
