import React, { Component } from 'react';
import HeaderBar from '../../components/HeaderBar';
import InformationTile from '../../components/InformationTile';
import information from '../../static/text/information';
import Scroll from 'react-scroll';

var Events     = Scroll.Events;

var scroll     = Scroll.animateScroll;
export default class Home extends Component {

  constructor (props){
      super(props);
  }

  componentDidUpdate() {

    Events.scrollEvent.register('begin', function() {
      
    });

    Events.scrollEvent.register('end', function() {

    });

    // scrollSpy.update();
    if(this.props.location.pathname === '/information') {
      scroll.scrollTo(900);
    }
    else if(this.props.location.pathname === '/') {
      scroll.scrollToTop();
    }
  }

  render() {

    return (
      <div containerId="mainPage">
        <HeaderBar />
        <InformationTile id='information' title={information.title} body={information.body} />
      </div>
    );
  }
}
