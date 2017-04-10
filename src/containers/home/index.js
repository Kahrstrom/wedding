import React, { Component } from 'react';
import HeaderBar from '../../components/HeaderBar';
import InformationTile from '../../components/InformationTile';
import information from '../../static/text/information';
// import './Home.scss';

export default class Home extends Component {
  render() {
    // const styles = require('./Home.scss');
    console.log('2hsdf')
    return (
      <div>
        <HeaderBar />
        {/*<InformationTile title={information.title} body={information.body} />*/}
      </div>
    );
  }
}
