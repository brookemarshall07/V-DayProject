import React, { Components, Component } from 'react';


class AddMessages extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Send a Valentine Gram: </label>
                    <input type="text" onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }
}

export default AddMessages;