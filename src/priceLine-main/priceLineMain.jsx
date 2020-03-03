import React, { useEffect, useState } from 'react';

import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./priceLineMain.css";

import Header from '../head/header';
import {Switch, Route, } from "react-router-dom";


import PriceLineTabs from '../priceline-tabs/priceline-tabs';
import TabComponent from "../TabComponent/TabComponent";
import Car from "../cars/cars";
import Flights from "../flights/flights";
import Hotel from "../hotel/hotel";
import BundleSave from "../bundle-save/bundle-save";
import Cruises from "../cruises/cruises";

class PriceLineMain extends React.Component {
    constructor() {
        super();
    }
    render = () => {
        return (
            <div className="">
                <Container className="main-container">
                   
                    <div className="adj_new_2  main">


                        <Route path="/" component={Header}/>
                        <TabComponent/>
                        <Switch>
                            <Route path="/cars" component={Car}/>
                            <Route path="/flights" component={Flights}/>
                            <Route path="/hotels" component={Hotel}/>
                            <Route path="/bundle+save" component={BundleSave}/>
                            <Route path="/cruises" component={Cruises}/>

                        </Switch>

                    </div>

                </Container>
            </div>
        );
    }
};

export default PriceLineMain;
