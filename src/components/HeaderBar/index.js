import React, { Component } from 'react';
import CountDown from '../CountDown';
import styles from './theme.scss';

export default class HeaderBar extends Component {
   render() {
      return (
         <div>
            <div className={styles.headerBar}></div>
            <CountDown />
         </div>
      );
   }
}
 