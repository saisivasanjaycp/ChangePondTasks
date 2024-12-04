import React, { Component } from 'react';
import Mustang from '../Assets/Mustang.jpg';
import Ferrari from '../Assets/Ferrari.jpg';

class ToggleImageComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkCar: true 
        };
    }

   
    toggleImage = () => {
        this.setState((prevState) => ({
            checkCar: !prevState.checkCar 
        }));
    };

    render() {
        const { checkCar } = this.state; 

        return (
            <div>
                <h2>Toggle Image Component</h2>
                <img src={checkCar ? Mustang : Ferrari} alt={checkCar ? 'Mustang' : 'Ferrari'} height='200px' width='200px' />
                <br />
                <button onClick={this.toggleImage} className="btn btn-primary" style={{ marginTop: '10px' }}>
                    Toggle Image
                </button>
            </div>
        );
    }
}

export default ToggleImageComp;