import React, { Component } from 'react';
import moment from 'moment';
import styles from './theme.scss';
const target = moment('2017-06-03 15:00');
export default class CountDown extends Component {
   

   componentDidMount() {
      const intervalId = setInterval(this.timer.bind(this), 1000);

      this.setState({intervalId: intervalId});
   }

   componentWillUnmount() {
      clearInterval(this.state.intervalId);
   }

   timer() {
      let countDown = {
         days: moment(target).diff(moment(), 'days'),
         hours: moment(target).diff(moment(), 'hours'),
         minutes: moment(target).diff(moment(), 'minutes'),
         seconds: moment(target).diff(moment(), 'seconds')
      };
      countDown.seconds = countDown.seconds - 60*countDown.minutes;
      countDown.minutes = countDown.minutes - 60*countDown.hours;
      countDown.hours = countDown.hours - 24*countDown.days;
      
      
      this.setState({ 
         countDown
      });
   }

   render() {
     
      
      if(!this.state || !this.state.countDown) {
         return (
            <div className={styles.container}>
               <h1>Agnes och Jonatan</h1>
               <h2>gifter sig om</h2>
               <div className={styles.innerContainer}>
                  <div className={styles.circle}></div>
                  <div className={styles.circle}></div>
                  <div className={styles.circle}></div>
                  <div className={styles.circle}></div>
               </div>
            </div>
         );
      }
      
      return (
         <div className={styles.container}>
            <h1>Agnes och Jonatan</h1>
            <h2>gifter sig om</h2>
            <div className={styles.innerContainer}>
               <div className={styles.circle}><h3>{this.state.countDown.days}</h3><span>dagar</span></div>
               <div className={styles.circle}><h3>{this.state.countDown.hours}</h3><span>timmar</span></div>
               <div className={styles.circle}><h3>{this.state.countDown.minutes}</h3><span>minuter</span></div>
               <div className={styles.circle}><h3>{this.state.countDown.seconds}</h3><span>sekunder</span></div>
            </div>
         </div>
      );
   }
}
