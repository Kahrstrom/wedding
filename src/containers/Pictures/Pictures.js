import React, { Component } from 'react';
import { AppBar, InformationTile } from '../../components';
import information from '../../static/text/information';

export default class Pictures extends Component {
  render() {
    const styles = require('./Pictures.scss');
    return (
      <div>
        <AppBar />
        <InformationTile title={information.title} body={information.body} />
      </div>
    );
  }
}
