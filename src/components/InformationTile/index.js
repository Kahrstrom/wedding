import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';  
import theme from './theme.scss';

const InformationTile = ({title, subtitle, body, id}) => {
   return (
      <Card id={id} className={theme.tile}>
         <CardTitle
            title={title}
            subtitle={subtitle} />
         <CardText>
            {body}
         </CardText>
      </Card>
   );
}

export default InformationTile;
