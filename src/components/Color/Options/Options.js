import React from 'react';

import Auxiliar from '../../../hoc/Auxliar/Auxiliar';
import dotRed from '../../../assets/images/dot-red.png';
import dotBlue from '../../../assets/images/dot-blue.png';
import dotGrey from '../../../assets/images/dot-grey.png';


const options = props => {

  return (
    <Auxiliar>
      <h2>Color</h2>
      <p>{props.desc}</p>
      <img src={dotRed} alt="Color red" />
      <img src={dotBlue} alt="Color blue" />
      <img src={dotGrey} alt="Color grey" />
    </Auxiliar>
  )
}

export default options;