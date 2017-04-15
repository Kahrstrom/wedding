import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import theme from './theme.scss';

const InformationTile = ({title, body, id}) => {
   return (
      <Grid id={id} className={theme.tile}>
         <h2>{title}</h2>
         <span>{body}</span>
      </Grid>
   );
}

export default InformationTile;
