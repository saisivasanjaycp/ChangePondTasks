import React, { Component } from 'react';
import Mustang from '../Assets/Mustang.jpg';
import Ferrari from '../Assets/Ferrari.jpg';
import redbull from '../Assets/redbull.jpg'; 

class MultipleImgComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: null,  
        };
    }

    toggleImage = (image) => {
        this.setState({ selectedImage: image });
    };

    render() {
        return (
            <div>
                <h2>Multiple Image with Name</h2>

                {this.state.selectedImage && (
                    <div style={{ marginTop: '20px' }}>
                        <h3>{this.state.selectedImage.alt}</h3>
                        <img
                            src={this.state.selectedImage.src}
                            alt={this.state.selectedImage.alt}
                            height='200px'
                            width='200px'
                        />
                    </div>
                )}

                
              
                <button
                    onClick={() => this.toggleImage({ src: Mustang, alt: 'Mustang' })}
                    className="btn btn-primary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show Mustang
                </button>
                <button
                    onClick={() => this.toggleImage({ src: Ferrari, alt: 'Ferrari' })}
                    className="btn btn-primary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show Ferrari
                </button>
                <button
                    onClick={() => this.toggleImage({ src: redbull, alt: 'redbull' })}
                    className="btn btn-primary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show redbull
                </button>
            </div>
        );
    }
}

export default MultipleImgComp;

