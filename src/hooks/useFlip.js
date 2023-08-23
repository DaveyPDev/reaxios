import { useState } from 'react';

function useFlip(initFlipState = true) {
  const [isFacingUp, setIsFacingUp] = useState(initFlipState);

  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  };

  return [isFacingUp, flipCard];
}

export default useFlip;
