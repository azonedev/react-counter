import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from "./box.component.js";
class App extends Component {
    state = {
        boxes : []
    }

    createBox = () => {
        const {boxes} = this.state;
        this.setState({boxes: [...boxes, 0]});
    }

    getBoxes = () => {
        return this.state.boxes.map(item => <Box key={item}/>)
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
