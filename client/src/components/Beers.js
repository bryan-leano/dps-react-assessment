import React, { Component } from 'react';
import { Header, Segment, Divider, Grid, Image, Card } from 'semantic-ui-react';
import ReactMarkDown from 'react-markdown';
import fetchBeers from '../actions/beers';
import axios from 'axios';
import { connect } from 'react-redux';
import dpsLogo from '../images/dpsLogo.svg';
import beer_images from '../images/beer_images.jpg';

class Beers extends Component {

  componentDidMount() {
    this.props.dispatch(fetchBeers());
  }
  
  displayBeers = () => {
    return this.props.beers.map( beer => {
      return(
        <Card key={beer.id}>
            {beer.labels ?
            <Image
              centered
              size='small'
              src={beer.labels.medium}
              alt={`${beer.name} logo`}
            />
            :
            <Image
              centered
              src={beer_images}
              size='medium'
              alt='Beer placeholder image'
            /> 
              }
            <Card.Content>
              <Card.Header>
                Beer: {beer.name}
              </Card.Header>
              <Card.Description>
                Description: {beer.description}
              </Card.Description>
            </Card.Content>
          </Card>
      );
    })
  }

  render() {
    return(
      <Segment basic >
        
          <Header as='h1' textAlign='center' color='green'>Beers</Header>
          <Segment basic style={{ height: '700px', overflow: 'auto' }}>
          <Card.Group stackable itemsPerRow={5}>
            { this.displayBeers() }
          </Card.Group>
          </Segment>
      </Segment>
        );
      }
      };
  
const mapStateToProps = (state) => {
  return { 
    beers: state.beers,
  }
}
      
export default connect(mapStateToProps)(Beers);