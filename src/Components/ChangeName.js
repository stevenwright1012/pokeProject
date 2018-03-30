import React, {Component} from 'react';
import axios from 'axios';

class ChangeName extends Component{
    constructor(){
        super()

        this.state={
            newName: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateName = this.updateName.bind(this);
    }

    handleChange(e){
        this.setState({
            newName: e,
        })
    }
    updateName(){
        axios.put(`/api/pokemon/${this.props.number}`, {name: this.state.newName}).then(res => {
            this.props.newNameFn(res.data)
        })
    }
    render(){
        return(
            <div className="input">
                <input type="text" 
                onChange={(e) => this.handleChange(e.target.value)}
                placeholder="New Name here"/>
                <button onClick={this.updateName}>Change</button>
            </div>
        )
    }
}

export default ChangeName;