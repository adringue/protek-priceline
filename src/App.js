import React, {useEffect, useState} from 'react';

import './App.css';
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import ButtonCompo from "./ButtonComp/Button";
import PriceLine from "./priceLine/priceLine";


class App extends React.Component {



    render = () => {


        return (
            <div className="App">

                <PriceLine/>


            </div>
        );
    }

};

export default App;
