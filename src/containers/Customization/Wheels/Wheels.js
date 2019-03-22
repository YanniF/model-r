import React, { Component } from 'react';

import Option from '../../../components/Wheels/Option/Option';
import Auxiliar from '../../../hoc/Auxliar/Auxiliar';

class Wheels extends Component {

  render() {

    return (
      <Auxiliar>
        <h2>Wheels</h2>
        <Option />
      </Auxiliar>

    )
  }
}

export default Wheels;