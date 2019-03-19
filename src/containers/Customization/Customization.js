import React, { Component } from 'react';
import axios from 'axios';

import Auxiliar from '../../hoc/Auxliar/Auxiliar';
import Footer from '../../components/Footer/Footer';
import Engine from '../Engine/Engine';
import Color from './Color/Color';


class Customization extends Component {

  state = {
    engine: null,
    color: null,
    wheels: null,
    description: null,
    price: 0,
    engineSelected: 1,
    colorSelected: 1,
    wheelsSelected: 1
  }

  componentDidMount() {
    axios.get('https://next.json-generator.com/api/json/get/41ORKNZDU')
      .then(res => {
        this.setState({ 
          engine: res.data.data.engine.items,
          color: res.data.data.color.items,
          description: res.data.data.color.description,
          wheels: res.data.data.wheels.items,
          price: res.data.data.price
        });
      })
      .catch(err => console.error(err));
  }

  engineSelectedHandler = id => {
    this.setState({ engineSelected: id });    
  }

  render() {
    let selected = null;
    let footer = null;
    let show = 'engine';

    if (this.state.engine) {
      selected = this.state.engineSelected - 1;

      footer = (
        <Footer
          price={this.state.price + this.state.engine[selected].price}
          kwh={this.state.engine[selected].kwh}
          type={this.state.engine[selected].type} />
      )
    }
    
    if(this.props.match.params.step === 'engine')
      show = <Engine engineSelected={this.engineSelectedHandler} />;
    else if(this.props.match.params.step === 'color')
      show = <Color />

    return (
      <Auxiliar>
        {show}
        {footer}
      </Auxiliar>
    )
  }
}

export default Customization;