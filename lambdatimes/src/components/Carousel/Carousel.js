import React, {Component} from 'react';
import styled from 'styled-components';
import {carouselData} from '../../data';

const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;

  @media (min-width: 1200px) {

    width: 1200px;
  }
`;

const CarouselImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;

  @media (min-width: 1200px) {
    width: 1200px;
  }

  img {
    width: 100%;
    display: none;
  }
`;

const CarouselButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 9999;

  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }

  top: 50%;
  ${({left}) => left ? `left: 25px;` : `right: 25px;`}
  transform: translate(0, -50%);
`;

/*

  .carousel 

*/

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
            <CarouselWrapper>
                <CarouselButton left onClick={this.leftClick}>{"<"}</CarouselButton>
                <CarouselButton onClick={this.rightClick}>{">"}</CarouselButton>
                <CarouselImageWrapper>{this.selectedImage()}</CarouselImageWrapper>
            </CarouselWrapper>
        )
    }
}