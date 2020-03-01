import React, {useEffect, useState} from 'react';

import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";


class ButtonCompo extends React.Component {

    constructor() {
        super();
        this.state={
            sty: ".1px solid black"

        }
    }
    handleBlur=()=>{
        this.setState({sty:'.1px solid red'});
    }

    render = () => {


        return (
            <div className="ButtonComp"  >
                <Container>

                    <Row>
                        <Col>
                            <Row style={{justifyContent: 'center'}}>
                                <button style={{border:this.state.sty}} onClick={this.handleBlur}>button</button>
                            </Row>

                        </Col>
                    </Row>


                </Container>

            </div>
        );
    }

};

export default ButtonCompo;
