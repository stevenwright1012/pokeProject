import React, {Component} from 'react';
import Spinner from './Spinner';
import './Header.css'


class Header extends Component{
    constructor(){
        super()

        this.state = {
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
        let postBattle2 = (pokemon2.stats[5].base_stat - pokemon1.stats[4].base_stat) + pokemon1.stats[3].base_stat;
        if (postBattle1 > postBattle2){
            this.setState({
                pokePhraseLeft: `${pokemon1.name} is the winner`,
                pokePhraseRight: `${pokemon2.name} is the loser`
            })
        }
        else if(postBattle1 < postBattle2){
            this.setState({
                pokePhraseLeft:`${pokemon1.name} is the loser`,
                pokePhraseRight: `${pokemon2.name} is the winner`,
            })
        }else if(postBattle2 === postBattle1){
            this.setState({
                pokePhraseLeft: "It's a tie",
                pokePhraseRight: "It's a tie"
            })
        }
    }
    }
    reset(){
        this.setState({
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
                <h1>{this.state.pokePhraseLeft}</h1>
                }
                </div>
                <button className="battle_button" onClick={this.battle}>
                    Battle!
                </button>
                <div className="pokemon">
                {this.props.pokemon1.name}
                {
                    this.props.pokemon1Full
                    ?
                    <img className="batte_image" src={`./pokesprites/${this.props.pokemon1.id}.png`} alt="pokemon"/>
                    :
                    null
                }
                </div>
                {
                    this.props.loading
                    ?
                    <Spinner />
                    :
                    <h1>VS</h1>
                }
                <div className="pokemon">
                {this.props.pokemon2.name}
                {
                    this.props.pokemon2Full
                    ?
                    <img className="batte_image" src={`./pokesprites/${this.props.pokemon2.id}.png`} alt="pokemon"/>
                    :
                    null
                }
                </div>
                <div className="poke_phrase">
                    <h1>{this.state.pokePhraseRight}</h1>
                </div>
                <button className='reset_button'onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Header;