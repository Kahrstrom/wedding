import React, { Component } from 'react';
import { AppBar, InformationTile } from '../../components';
import information from '../../static/text/information';

export default class Osa extends Component {
  render() {
    const styles = require('./Osa.scss');
    return (
      <div>
        <AppBar />
        <InformationTile title={information.title} body={information.body} />
      </div>
    );
  }
}
