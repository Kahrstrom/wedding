import React, { Component } from 'react';
import HeaderBar from '../../components/HeaderBar';
import InformationTile from '../../components/InformationTile';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {information, toasts, gifts} from '../../static/text/information';
import Scroll from 'react-scroll';

var Events = Scroll.Events;

var scroll = Scroll.animateScroll;
export default class Home extends Component {

  constructor (props){
      super(props);
  }

  scrollOnEnter = () => {
    if(this.props.location.pathname === '/information') {
      scroll.scrollTo(800);
    }
    else if(this.props.location.pathname === '/') {
      scroll.scrollToTop();
    }
  }

  componentDidUpdate() {
    this.scrollOnEnter();
  }

  componentDidMount() {
    this.scrollOnEnter();
  }

  render() {

    return (
      <div containerId="mainPage">
        <HeaderBar />
        <Grid>
          <InformationTile id='information' title={information.title} subtitle={information.subtitle} body={information.body} />
          <InformationTile id='toasts' title={toasts.title} subtitle={toasts.subtitle} body={toasts.body} />
          <InformationTile id='gifts' title={gifts.title} subtitle={gifts.subtitle} body={gifts.body} />
        </Grid>
      </div>
    );
  }
}
