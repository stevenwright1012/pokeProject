import React, {Component} from 'react';
import '../Header.css'
class PokeBox extends Component{
    render(){
        return (
            <div className="pokemon">
                {
                    this.props.name
                    ?
                    <p>{this.props.name.toUpperCase()}</p>
                    :
                    this.props.name
                }
                {
                    this.props.pokemonFull
                    ?
                    <img className="batte_image" src={`./pokesprites/${this.props.pokemon.id}.png`} alt="pokemon"/>
                    :
                    null
                }
            </div>
        )
    }
}

export default PokeBox;