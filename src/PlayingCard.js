import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from "./hooks/useFlip";

/* Renders a single playing card. */
function PlayingCard({ front }) {
  const [isFacingUp, flipCard] = useFlip()
  return (
    <img
      src={isFacingUp ? front : backOfCard}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
