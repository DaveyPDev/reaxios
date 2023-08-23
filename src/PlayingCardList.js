import React from 'react';
import uuid from 'uuid';
import PlayingCard from './PlayingCard';
import useAxios from './hooks/useAxios'; 

import './PlayingCardList.css';

function PlayingCardList() {
  const [cardsData, fetchCardData] = useAxios(
    'https://deckofcardsapi.com/api/deck/new/draw/'
  );

  const addCard = () => {
    fetchCardData('https://deckofcardsapi.com/api/deck/new/draw/');
  };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cardsData.map((cardData) => (
          <PlayingCard key={uuid()} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

export default PlayingCardList;
