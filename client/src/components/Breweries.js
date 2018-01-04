import React, { Component } from 'react';
import { Header, Segment, Divider, Grid, Image, Card } from 'semantic-ui-react';
import ReactMarkDown from 'react-markdown';
import axios from 'axios';
import dpsLogo from '../images/dpsLogo.svg';

class Breweries extends Component {
  
  render() {
    return(
      <Segment basic >
        <Header as='h1' textAlign='center' color='green'>Breweries</Header>
        <Segment basic style={{ height: '700px', overflow: 'auto' }}>
        
        </Segment>
      </Segment>
    );
  }
};

export default Breweries;