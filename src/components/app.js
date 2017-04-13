import React, { Component } from 'react';
import SKAppBar from './sk_app_bar/index';
import FormEntry from './form-entry/index';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'react-toolbox/lib/commons.scss';           // Import common styles
import './theme/main.scss';

export default class App extends Component {
  render () {
    return (
      <div> 
        <SKAppBar />
        {this.props.children}
        {/*<FormEntry />*/}
      </div>
    );
  }
}
