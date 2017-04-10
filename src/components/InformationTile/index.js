import React, { Component } from 'react';
import './theme.scss';

const InformationTile = ({title, body}) => {
   return (
      <div className='tile'>
         <h2>{title}</h2>
         <span>{body}</span>
      </div>
   );
}

export default InformationTile;
