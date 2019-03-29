import React, {Component} from 'react';
import {carouselData} from '../../data';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            index: 0
        }
    }
    componentDidMount() {
        this.setState({images: carouselData})
    }

    leftClick = () => {
        let nextIndex;
        if (this.state.index === 0) 
            nextIndex = this.state.images.length - 1;
        else 
            nextIndex = this.state.index - 1;
        this.setState({index: nextIndex});
    }

    rightClick = () => {
        let nextIndex;
        if (this.state.index === this.state.images.length - 1) 
            nextIndex = 0;
        else 
            nextIndex = this.state.index + 1;
        this.setState({index: nextIndex});
    }

    selectedImage = () => {
        return <img
            alt="carousel"
            src={this.state.images[this.state.index]}
            style={{
            display: 'block'
        }}/>
    }

    render() {
        return (
            <div className="carousel">
                <div className="left-button" onClick={this.leftClick}>{"<"}</div>
                <div className="right-button" onClick={this.rightClick}>{">"}</div>
                {this.selectedImage()}
            </div>
        )
    }
}