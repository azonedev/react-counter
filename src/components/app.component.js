import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import Box from "./box.component.js";
class App extends Component {
    state = {
        boxes : []
    }

    createBox = () => {
        const {boxes} = this.state;
        this.setState({boxes: [...boxes, 0]});
    }

    removeBox = (id) => {
        // todo: remove the current box
        const filteredBoxes = this.state.boxes.filter((_,idx)=> id !== idx)
        this.setState({
            boxes: [...filteredBoxes]
        })
    }

    getBoxes = () => {
        return this.state.boxes.map((item,id) => <Box key={Math.random()} id={id} removeBox={this.removeBox}/>)
    }

    render() {
        return (
           <div>
                {/* add box */}
                <button className="btn btn-primary m-3" onClick={this.createBox}>
                    + Add new box
                </button>

                {/* increment - decrement boxes */}
                {this.getBoxes()}
            </div>
        )
    }
}

export default App;
