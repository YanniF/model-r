import React, { Component } from 'react';
import axios from 'axios';

import Auxiliar from '../../hoc/Auxliar/Auxiliar';
import Footer from '../../components/Footer/Footer';
import Engine from './Engine/Engine';
import Color from './Color/Color';
import Wheels from './Wheels/Wheels';
import Final from '../../components/Final/Final';

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
          price: res.data.data.price,
        });
      })
      .catch(err => console.error(err));
  }

  engineSelectedHandler = id => {
    this.setState({ engineSelected: id });    
  }

  colorSelectedHandler = id => {
    this.setState({ colorSelected: id });
  }

  wheelsSelectedHandler = id => {
    this.setState({ wheelsSelected: id });
  }

  render() {
    let step = this.props.match.params.step;
    let selectedEngine = null;
    let selectedColor = null;
    let selectedWheels = null;
    let footer = null;
    let showPage = 'engine';
    let showColor = false;
    let showWheels = false;
    let totalPrice = 0;

    if(step === 'engine') {
      showPage = <Engine engineSelected={this.engineSelectedHandler} />;
    }
    else if(step === 'color') {
      showPage = <Color colorSelected={this.colorSelectedHandler} />
      showColor = true;
    }
    else if(step === 'wheels') {
      showPage = <Wheels wheelsSelected={this.wheelsSelectedHandler} />
      showColor = true;
      showWheels = true;
    }
    else if(step === 'final') {
      showPage = <Final />
    }

    if (this.state.engine && step !== 'final') {
      selectedEngine = this.state.engineSelected - 1;
      selectedColor = this.state.colorSelected - 1;
      selectedWheels = this.state.wheelsSelected - 1;

      totalPrice = this.state.price + this.state.engine[selectedEngine].price + this.state.color[selectedColor].price + this.state.wheels[selectedWheels].price

      footer = (
        <Footer
          price={totalPrice.toLocaleString()}
          kwh={this.state.engine[selectedEngine].kwh}
          type={this.state.engine[selectedEngine].type}
          color={this.state.color[selectedColor].id}
          wheels={this.state.wheels[selectedWheels].image}
          showColor={showColor}
          showWheels={showWheels} />
      )
    }

    return (
      <Auxiliar>
        {showPage}
        {footer}
      </Auxiliar>
    )
  }
}

export default Customization;