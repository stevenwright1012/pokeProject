import React, {Component} from 'react';
import axios from 'axios';
import '../Header.css'
class PokeBox extends Component{
    render(){
        return (
            <div className="pokemon">
                {
                    this.props.name
                    ?
                    this.props.name.toUpperCase()
                    :
                    this.props.name
                }
                {
                    this.props.pokemonFull
                    ?
                    <img className="batte_image" src={`./pokesprites/${this.props.pokemon.id}.png`} alt="pokemon"/>
                    // getName();
                    :
                    null
                }
            </div>
        )
    }
}

export default PokeBox;