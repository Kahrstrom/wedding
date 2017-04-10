import React, { Component } from 'react';
import { AppBar, InformationTile } from '../../components';
import information from '../../static/text/information';

export default class Information extends Component {
  render() {
    const styles = require('./Information.scss');
    return (
      <div>
        <AppBar />
        <InformationTile title={information.title} body={information.body} />
      </div>
    );
  }
}
