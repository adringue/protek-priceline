import React, {useEffect, useState} from 'react';

import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";

import 'react-dates/initialize';
import {DateRangePicker, SingleDatePicker, DayPickerRangeController} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


import "./reservation-details.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {Link} from "react-router-dom";


class ReservationDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            "roomCount": 1,
            "adultCount": 1,
            "childrenCount": 0,
            "disableRoomButton":false,
            "disableAdultButton":false,
            "disableChildrenButton":false

        }
    }

    handleRoomMinus=()=>{
        this.setState({"roomCount":this.state.roomCount-1})
        if(this.state.roomCount<=1){
            this.setState({"disableRoomButton":true})
        } else {
            this.setState({"disableRoomButton":false})

        }

    }
    handleRoomPlus=()=>{
        this.setState({"roomCount":this.state.roomCount+1})

    }
    handleAdultMinus=()=>{

    }
    handleAdultPlus=()=>{

    }
    handleChildrenMinus=()=>{

    }
    handleChildrenplus=()=>{

    }

    render = () => {
        return (
            <Container>
                <div className="reserv">
                    <Row>
                        <Col s>
                            <FontAwesomeIcon icon={faUser}/>
                            <span>
                                    {this.state.adultCount} Adult,
                                </span>
                            <span>
                                    {this.state.roomCount} Room,
                                </span>
                            <span>
                                    {this.state.childrenCount} Children
                                </span>

                        </Col>
                        {/*    <Col s>*/}
                        {/*        <div className="">*/}
                        {/*            <Row>*/}
                        {/*                <Col>*/}
                        {/*                    {this.state.adultCount}*/}
                        {/*                </Col>*/}

                        {/*                <Col>*/}
                        {/*                    Adult,*/}
                        {/*                </Col>*/}
                        {/*            </Row>*/}


                        {/*        </div>*/}
                        {/*    </Col>*/}
                        {/*    <Col s>*/}
                        {/*        <div className="">*/}
                        {/*            {this.state.roomCount} Room,*/}


                        {/*        </div>*/}
                        {/*    </Col>*/}
                        {/*    <Col s>*/}
                        {/*        <div className="">*/}
                        {/*            {this.state.childrenCount} Children*/}


                        {/*        </div>*/}
                        {/*    </Col>*/}
                        {/*</Row>*/}
                        {/*<Row>*/}
                        {/*    <Col>*/}

                        {/*    </Col>*/}

                    </Row>
                    <Row>
                        <div className="reserv_2">
                        <Col s id="enter-info">
                            <Row>
                                <Col>
                                    <Row>
                                        <Col className="adj-t">
                                               Rooms

                                        </Col>


                                        <Col>
                                            <Row>
                                                <span><button onClick={this.handleRoomMinus} disabled={this.state.disableRoomButton}><i className="fa fa-minus-circle adj-t-2 adj-t-4" aria-hidden="true"></i></button></span>

                                                <span className="adj-t-3">{this.state.roomCount}</span>
                                                <span><div onClick={this.handleRoomPlus}><i className="fa fa-plus-circle adj-t-2" aria-hidden="true"></i></div>
</span>
                                            </Row>
                                        </Col>
                                    </Row>


                                        <Row>
                                            <Col className="adj-t">
                                                Adults

                                            </Col>
                                            <Col>
                                                <Row>
                                                    <span><button disabled={this.state.disableAdultButton} onClick={this.handleAdultMinus}><i className=" fa fa-minus-circle adj-t-2 adj-t-4" aria-hidden="true"></i>
                                                    </button>

</span>
                                                    <span className="adj-t-3">{this.state.adultCount}</span>
                                                    <span><button onClick={this.handleAdultPlus}><i className="fa fa-plus-circle adj-t-2" aria-hidden="true"></i>
                                                    </button>
</span>
                                                </Row>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col className="adj-t">
                                             Children

                                            </Col>
                                            <Col>
                                                <Row>
                                                    <span><button disabled={this.state.disableChildrenButton} onClick={this.handleChildrenMinus}><i className="fa fa-minus-circle adj-t-2 adj-t-4" aria-hidden="true"></i></button>
</span>
                                                    <span className="adj-t-3">{this.state.childrenCount}</span>
                                                    <span><button onClick={this.handleChildrenplus}><i className="fa fa-plus-circle adj-t-2" aria-hidden="true"></i></button>

</span>
                                                </Row>
                                            </Col>
                                        </Row>

                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <div className="">
                                        <Button variant="primary" className="adj-submit-button" type="submit">
                                            Done
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        </div>
                    </Row>
                </div>

            </Container>

    );
    }
    };

    export default ReservationDetails;
