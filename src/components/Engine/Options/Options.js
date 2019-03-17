import React, { Component } from 'react'

import Option from './Option/Option';
import style from './Options.module.css';

class Options extends Component {

  state = {
    optionSelected: "P",
    selected: false
  }

  selected = false;

  optionClickedHandler = type => {
    this.setState({ optionSelected: type });
  }

  render() {
    return (
      <div className={style.options}>
        <h2>Engine</h2>
        {
          this.props.engineInfo.map(item => {
            if (this.state.optionSelected === item.type)
              this.selected = true;            
            else 
              this.selected = false;

            return (
              <Option
                key={item.id}
                info={item}                
                selected={this.selected}
                clicked={() => this.optionClickedHandler(item.type)} />
            )
          })
        }
      </div>
    )
  }
}

export default Options
