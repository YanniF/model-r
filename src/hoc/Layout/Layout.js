import React, { Component } from 'react';

import Auxiliar from '../Auxliar/Auxiliar';
import Navigation from '../../components/Navigation/Navigation';

class Layout extends Component {

  render() {
    return (
      <Auxiliar>
        <Navigation />
        <main>
          {this.props.children}
        </main>
      </Auxiliar>      
    );
  }
}

export default Layout;
