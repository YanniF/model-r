import React, { Component } from 'react';
import axios from 'axios';

import Options from '../../../components/Engine/Options/Options';
import style from './Engine.module.css';

class Engine extends Component {

  state = {
    engine: null,
    selected: 1
  }

  componentDidMount() {
    axios.get('https://next.json-generator.com/api/json/get/41ORKNZDU')
      .then(res => {
        this.setState({ engine: res.data.data.engine.items, price: res.data.data.price });
      })
      .catch(err => console.error(err));
  }

  optionClickedHandler = id => {
    this.props.engineSelected(id);
    this.setState({ selected: id });
  }

  buttonClickedHandler = () => {
    this.props.history.push(this.props.match.url + '/color');
  }

  render() {
    let image = null;
    let options = null;

    if (this.state.engine) {
      let selected = this.state.selected - 1;

      image = <figure className={style.figure}><img src={this.state.engine[selected].image} alt="Car" /></figure>

      options = (
        <Options
          className={style.options}
          engineInfo={this.state.engine}
          optionClicked={this.optionClickedHandler}
          selected={this.state.selected} />
      )
    }

    return (
      <section className={style.engine}>
        {image}
        {options}
      </section>
    )
  }
}

export default Engine
