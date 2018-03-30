import React, {Component} from 'react';
import Spinner from './Spinner';


class Header extends Component{
    constructor(){
        super()

        this.state = {
            winner: '',
            loser: '',
        }
        this.battle = this.battle.bind(this)
        this.reset = this.reset.bind(this)
    }

    battle(){
        let pokemon1 = this.props.pokemon1;
        let pokemon2 = this.props.pokemon2;
        let postBattle1 = pokemon1.stats[5].base_stat -pokemon2.stats[4].base_stat;
        let postBattle2 = pokemon2.stats[5].base_stat - pokemon1.stats[4].base_stat;
        if (postBattle1 > postBattle2){
            this.setState({
                winner: `${pokemon1.name} is the winner`,
                loser: `${pokemon2.name} is the loser`
            })
        }
        else if(postBattle1 < postBattle2){
            this.setState({
                winner:`${pokemon2.name} is the winner`,
                loser: `${pokemon1.name} is the loser`,
            })
        }else if(postBattle2 === postBattle1){
            this.setState({
                winner: "It's a tie",
                loser: "It's a tie"
            })
        }
    }
    reset(){
        this.setState({
            winner:"",
            loser: "",
        })
        this.props.resetFn();
    }
    render(){
        return(
            <div className="top">
                <div>{this.state.winner}</div>
                <div className="pokemon"
                style={{background: `url()`}}>
                {this.props.pokemon1.name}
                </div>
                <button className="battle_button"onClick={this.battle}>Battle!</button>
                <Spinner />
                <div className="pokemon">
                {this.props.pokemon2.name}
                </div>
                <div>{this.state.loser}</div>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Header;