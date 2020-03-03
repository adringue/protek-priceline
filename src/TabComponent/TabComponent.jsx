import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
 import { Container } from "react-bootstrap";
 import { Row } from "react-bootstrap";
 import { Col } from "react-bootstrap";
 import { Form } from "react-bootstrap";
 import { Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";


// import Header from '../head/header';
// import PriceLineTabs from '../priceline-tabs/priceline-tabs';

import "./TabComponent.css";

class TabComponent extends React.Component {
    constructor() {
        super();
    }
    render = () => {
        return (
            <div className="">
                {/*<Link to="/cars">*/}
                {/*    <div className="mytab">Hotels</div>*/}
                {/*</Link>*/}
                {/*<Link to="/flight">*/}
                {/*    <div className="mytab">Flights</div>*/}
                {/*</Link>*/}

                {/*<div className="mytab">Bundle</div>*/}
                {/*<div className="mytab">Cars</div>*/}
                {/*<div className="mytab">Cruises</div>*/}
                <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        {/*<Nav.Link href="/cars">HOTELS</Nav.Link>*/}
                        <Nav.Link as={Link} to="/hotels">HOTELS</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        {/*<Nav.Link eventKey="link-1">FLIGHTS</Nav.Link>*/}
                        <Nav.Link as={Link} to="/flights">FLIGHTS</Nav.Link>

                    </Nav.Item>
                    <Nav.Item>
                        {/*<Nav.Link eventKey="link-2" >*/}
                        {/*    BUNDLE+SAVE*/}
                        {/*</Nav.Link>*/}
                        <Nav.Link as={Link} to="/bundle+save">BUNDLE+SAVE</Nav.Link>

                    </Nav.Item>
                    <Nav.Item>
                        {/*<Nav.Link eventKey="link-3">*/}
                        {/*    CARS*/}
                        {/*</Nav.Link>*/}
                        <Nav.Link as={Link} to="/cars">CARS</Nav.Link>

                    </Nav.Item>
                    <Nav.Item>
                        {/*<Nav.Link eventKey="link-4" >*/}
                        {/*    CRUISES*/}
                        {/*</Nav.Link>*/}
                        <Nav.Link as={Link} to="/cruises">CRUISES</Nav.Link>

                    </Nav.Item>
                </Nav>
            </div>
        );
    }
};

export default TabComponent;
