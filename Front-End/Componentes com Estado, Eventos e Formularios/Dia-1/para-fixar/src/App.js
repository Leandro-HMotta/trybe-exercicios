import './App.css';

import React from 'react';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.handleButtonOne = this.handleButtonOne.bind(this);
  //   this.handleButtonTwo = this.handleButtonTwo.bind(this);
  //   this.handleButtonThree = this.handleButtonThree.bind(this);
  // }
  
  state = {
    botao1:0,
    botao2:0,
    botao3:0,
  }
  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }
    
  handleButtonOne = () => {  
    const { botao1 } = this.state;
    this.setState((estadoAnterior, _props) => ({
      botao1: estadoAnterior.botao1 + 1
    }),() => {
      this.getButtonColor(botao1);
    }); 
  }

  handleButtonTwo = () => {
    const { botao2 } = this.state;
    this.setState((estadoAnterior, _props) => ({
      botao2: estadoAnterior.botao2 + 1
    }),() => {
      this.getButtonColor(botao2);
    });
  }

  handleButtonThree = () => {
    const { botao3 } = this.state;
    this.setState((estadoAnterior, _props) => ({
      botao3: estadoAnterior.botao3 + 1
    }),() => {
      this.getButtonColor(botao3);
    });
  }
  render() {
    const {botao1 , botao2, botao3} = this.state; 
    return (
      <div>
        <button onClick={ this.handleButtonOne }
         style={{background: this.getButtonColor(botao1)}}>{this.state.botao1}
         </button>
        <button onClick={ this.handleButtonTwo }
        style={{background:this.getButtonColor(botao2)}} >{botao2}
        </button>
        <button onClick={ this.handleButtonThree }
        style={{background: this.getButtonColor(botao3)}}>{botao3}
        </button>
      </div>
    );
  }
}

export default App;

