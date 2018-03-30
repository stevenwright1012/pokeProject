import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import ChangeName from './ChangeName'
class Button extends Component{
    constructor(){
        super()

        this.state= {
            pokemon: {name: ""},
            rename: false,
        }
    
    this.click = this.click.bind(this);
    this.rename = this.rename.bind(this);
    this.newName = this.newName.bind(this);
    }
    componentDidMount(){
        axios.get(`/api/pokemon/${this.props.number}`).then(res => {
            this.setState({
                pokemon: res.data,
            })
        })
    }

click(){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.number}`).then(res => {
        this.props.setPokemon(res.data)
    })
}

rename(){
    this.setState({rename: true})
}
newName(arr){
    this.setState({
        pokemon: arr[this.props.number],
        rename: false,
    })
}
    render(){
        let {name, sprite, number} = this.state.pokemon;
        return(<div>

                <div className="poke_button"
                onClick={this.click}>
                {name.toUpperCase()}
                <img src={sprite} alt="pokeName"/>
                </div>
                    <button onClick={() => this.rename()}>Rename</button>
                    {
                        this.state.rename
                        ?
                        <ChangeName number={number}
                        newNameFn={this.newName}/>
                        :
                        null
                    }
                </div>
        )
    }
}





export default Button;