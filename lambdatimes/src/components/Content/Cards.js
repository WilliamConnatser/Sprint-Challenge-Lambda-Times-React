import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (min-width: 1200px) { 
    width: 1200px;
  }
`;

const Cards = props => {
    return (
        <CardWrapper>
            {props
                .cards
                .map((card, index) =>< Card key={index} card = {
                    card
                } />)}
        </CardWrapper>
    )
}

// Make sure you include prop types for all of your incoming props
export default Cards;

Cards.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({headline: PropTypes.string, img: PropTypes.string, author: PropTypes.author}))
}