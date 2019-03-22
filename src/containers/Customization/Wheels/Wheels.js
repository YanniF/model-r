import React, { Component } from 'react';
import axios from 'axios';

import Option from '../../../components/Wheels/Options/Option';
import style from './Wheels.module.css';

class Wheels extends Component {

  state = {
    wheels: null,
    selected: 1
  }

  componentDidMount() {
    axios.get('https://next.json-generator.com/api/json/get/41ORKNZDU')
      .then(res => {
        this.setState({ wheels: res.data.data.wheels.items });
      })
      .catch(err => console.error(err));
  }

  optionClickedHandler = id => {
    this.props.wheelsSelected(id);
    this.setState({ selected: id });
  }

  render() {

    return (
      <section className={style.wheels}>
        <h2>Wheels</h2>
        <div className={style.option}>
          {
            this.state.wheels
              ?
              this.state.wheels.map(wheel => (
                <Option wheels={wheel} selected={this.state.selected} key={wheel.id} optionClicked={this.optionClickedHandler} />
              ))
              :
              null
          }
        </div>
      </section>
    )
  }
}

export default Wheels;