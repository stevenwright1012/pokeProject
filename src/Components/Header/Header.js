import React, {Component} from 'react';
import Spinner from './Spinner';
import './Header.css'
import PokeBox from './PokeBox/PokeBox'

class Header extends Component{
    constructor(){
        super()

        this.state = {
            battled: false,
            pokePhraseLeft: '',
            pokePhraseRight: '',
        }
        this.battle = this.battle.bind(this)
        this.reset = this.reset.bind(this)
    }

    battle(){
        if(this.props.pokemon1Full === false || this.props.pokemon2Full === false){
            alert("You have not selected a Pokemon. Click on a Pokemon's picture to get started")
        }
        else{
        let pokemon1 = this.props.pokemon1;
        let pokemon2 = this.props.pokemon2;
        let postBattle1 = (pokemon1.stats[5].base_stat -pokemon2.stats[4].base_stat) + pokemon1.stats[3].base_stat;
        let postBattle2 = (pokemon2.stats[5].base_stat - pokemon1.stats[4].base_stat) + pokemon2.stats[3].base_stat;
        if (postBattle1 > postBattle2){
            this.setState({
                battled: true,
                pokePhraseLeft: `${this.props.pokemon1Name.charAt(0).toUpperCase() + this.props.pokemon1Name.slice(1)} is the winner!`,
                pokePhraseRight: `${this.props.pokemon2Name.charAt(0).toUpperCase() + this.props.pokemon2Name.slice(1)} is the loser.`
            })
        }
        else if(postBattle1 < postBattle2){
            this.setState({
                battled: true,
                pokePhraseLeft:`${this.props.pokemon1Name.charAt(0).toUpperCase() + this.props.pokemon1Name.slice(1)} is the loser.`,
                pokePhraseRight: `${this.props.pokemon2Name.charAt(0).toUpperCase() + this.props.pokemon2Name.slice(1)} is the winner!`,
            })
        }else if(postBattle2 === postBattle1){
            this.setState({
                battled: true,
                pokePhraseLeft: "It's a tie!",
                pokePhraseRight: "It's a tie!"
            })
        }
    }
    }
    reset(){
        this.setState({
            battled: false,
            pokePhraseLeft:"",
            pokePhraseRight: "",
        })
        this.props.resetFn();
    }
    render(){
        return(
            <div className="top">
                <div className="poke_phrase">
                {
                    this.state.battled === false && this.props.pokemon1Full === true
                    ?
                    <div className="stats">
                    <p>HP:{JSON.stringify(this.props.pokemon1.stats[5].base_stat)}</p>
                    <p>Attack: {JSON.stringify(this.props.pokemon1.stats[4].base_stat)}</p>
                    <p>Defense: {JSON.stringify(this.props.pokemon1.stats[3].base_stat)}</p>
                    <p>Speed: {JSON.stringify(this.props.pokemon1.stats[0].base_stat)}</p>
                    </div>
                    :
                    <h1>{this.state.pokePhraseLeft}</h1>
                }
                </div>
                <button className="battle_button" onClick={this.battle}>
                    Battle!
                </button>
                <PokeBox pokemon={this.props.pokemon1}
                pokemonFull={this.props.pokemon1Full}
                name={this.props.pokemon1Name}/>
                {
                    this.props.loading
                    ?
                    <Spinner />
                    :
                    <h2>VS</h2>
                }
                <PokeBox pokemon={this.props.pokemon2}
                pokemonFull={this.props.pokemon2Full}
                name={this.props.pokemon2Name}/>
                <div className="poke_phrase">
                {
                    this.state.battled === false && this.props.pokemon2Full === true
                    ?
                    <div className="stats">
                    <p>HP:{JSON.stringify(this.props.pokemon2.stats[5].base_stat)}</p>
                    <p>Attack: {JSON.stringify(this.props.pokemon2.stats[4].base_stat)}</p>
                    <p>Defense: {JSON.stringify(this.props.pokemon2.stats[3].base_stat)}</p>
                    <p>Speed: {JSON.stringify(this.props.pokemon2.stats[0].base_stat)}</p>
                    </div>
                    :
                    <h1>{this.state.pokePhraseRight}</h1>
                }
                </div>
                <button className='reset_button'onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Header;