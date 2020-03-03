import React, { useEffect, useState } from 'react';

import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Tabs} from "react-bootstrap";
import { Tab } from "react-bootstrap";



import "./priceline-tabs.css";

import Header from '../head/header';
import Hotel from '../hotel/hotel';
import Flights from '../flights/flights';
import BundleSave from '../bundle-save/bundle-save';
import Car from '../cars/cars';
import Cruise from '../cruise/cruise';





/**
  Follow on Twitter: @tukkajukka
  http://lemanse.fi

  This example shows how to use React Bootstrap with React.
  
  You need to include the latest Bootstrap's CSS in your project
  which is then picked up by React Bootstrap (it uses the same CSS classes).
  
  React Bootstrap gives you Bootstrap's elements as React components that
  you then use in your own React components.
*/

/*
  Import the React Bootstrap components that you want to use.
  
  In a real environment (Webpack / Browserify, ES6) this would be:
    import { Tab, Tabs } from 'react-bootstrap';
*/

class PriceLineTabs extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // Takes active tab from props if it is defined there
      activeTab: props.activeTab || 1
    };
    
    // Bind the handleSelect function already here (not in the render function)
    this.handleSelect = this.handleSelect.bind(this);
  }
  
  render() {
    return (
      <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
        <Tab eventKey={1} title="Hotels"><Hotel/></Tab>
        <Tab eventKey={2} title="Flights"><Flights/></Tab>
        <Tab eventKey={3} title="Bundle+Save" ><BundleSave/></Tab>
        <Tab eventKey={4} title="cars"><Car/></Tab>
        <Tab eventKey={5} title="cruises"><Cruise/></Tab>
      </Tabs>
    );
  }
  
  handleSelect(selectedTab) {
    // The active tab must be set into the state so that
    // the Tabs component knows about the change and re-renders.
    this.setState({
      activeTab: selectedTab
    });
  }
}

// ReactDOM.render(
//   <MyComponent activeTab={4} />,
//   document.getElementsByClassName('container')[0]
// );

export default PriceLineTabs;
