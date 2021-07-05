/* RATING ATOM - MULTIPURPOSE ATOM USED TO DISPLAY ANY ICON A CERTAIN NUMBER OF TIMES IN A LIST 
   USED IN THE INFOBAR ATOM TO DISPLAY THE DIFFICULTY OF A RECPIE
*/

import React, { Component } from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export const RatingAtom = ({ iconName, size, colour = 'black' }) => {

  return [ 1, 2 ].map((index) => {
    return (
      <FontAwesome5
        key={ index }
        name={ iconName }
        size={ size }
        color={ colour } />
    );
  });
};