import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import Button from './Components/Button/Button';
import Header from './Components/Header/Header';

class App extends Component {
  constructor(){
    super()

    this.state = {
      pokemon1: {},
      pokemon2: {},
      pokemon1Full: false,
      pokemon2Full: false,
      loading: false,
    }
    this.setPokemon = this.setPokemon.bind(this)
    this.resetPokemon = this.resetPokemon.bind(this)
    this.loading = this.loading.bind(this)
  }

  loading(){
    this.setState({
      loading:true,
    })
  }

  setPokemon(obj){
    if(this.state.pokemon1Full === false && this.state.pokemon2Full === false){
      this.setState({
        pokemon1 : obj,
        pokemon1Full: true,
        loading: false,
     })
    }else if(this.state.pokemon1Full === true && this.state.pokemon2Full === false){
      this.setState({
        pokemon2: obj,
        pokemon2Full: true,
        loading: false,
      })
    }else if(this.state.pokemon1Full === true && this.state.pokemon2Full === true){

    }
  }
  resetPokemon(){
    this.setState({
      pokemon1: {},
      pokemon2: {},
      pokemon1Full: false,
      pokemon2Full: false,
    })
  }
  render() {
    var buttons = []
    for(let i = 1; i<=151; i++){
      buttons.push(<Button number={i} 
                    key={i} 
                    setPokemonFn={this.setPokemon}
                    loadingFn={this.loading}/>)
    }
    return (
      <div>
        <Header pokemon1={this.state.pokemon1}
        pokemon2={this.state.pokemon2}
        resetFn={this.resetPokemon}
        pokemon1Full={this.state.pokemon1Full}
        pokemon2Full={this.state.pokemon2Full}
        loading={this.state.loading}/>
        <div className="main">
          <div className="buttons">
          {buttons}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
