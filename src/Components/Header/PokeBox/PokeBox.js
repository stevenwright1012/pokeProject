import React, {Component} from 'react';
import '../Header.css'
class PokeBox extends Component{
    render(){
        return (
            <div className="pokemon">
                {
                    this.props.pokemon.name
                    ?
                    this.props.pokemon.name.toUpperCase()
                    :
                    this.props.pokemon.name
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