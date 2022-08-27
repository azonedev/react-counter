import React, { Component } from 'react';

class Box extends Component{
    
    state = {
        number : 6,
        decrementClass : "btn btn-warning",
    }

    increment = () => {
        if(this.state.number === 0){
            this.setState({
                number : this.state.number + 1,
                decrementClass : "btn btn-warning",
            })
        }else{
            this.setState({
                number : this.state.number + 1
            })
        }
    }

    decrement = () => {
        if(this.state.number > 0){
            this.setState({
                number : this.state.number - 1
            })
        }else{
            this.setState({
                decrementClass : "btn btn-danger"
            })
        }
    }

    removeBox = () => {
        // todo: remove the current box
    }

    render(){
        return (
            <div className="m-3">
                <button className={this.state.decrementClass} onClick={this.decrement}>-</button>
                <span className="p-3">{this.state.number}</span>
                <button className="btn btn-primary" onClick={this.increment}>+</button>
                <span className='p-3'></span>
                <button className='btn btn-danger' onClick={this.removeBox}>X</button>
            </div>
        )
    }
}

export default Box;