import { useState } from 'react';
import Game from './Game';
import GameOver from './GameOver';
import StartScreen from './StartScreen';

import { animeCharacters } from './data/characters';

function App() {
  const stages = [
    { id: 1, stage: 'start' },
    { id: 2, stage: 'game' },
    { id: 3, stage: 'gameover' },
  ];

  const [gameStage, setGameStage] = useState(stages[0].stage);
  const [characters] = useState(animeCharacters);

  const startGame = () => {
    setGameStage(stages[1].stage);
  };

  const endGame = () => {
    setGameStage(stages[2].stage);
  };

  const restartGame = () => {
    setGameStage(stages[0].stage);
  };

  console.log('teste', gameStage);
  console.log('data', characters);

  return (
    <div className="flex justify-center items-center h-screen w-full">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game endGame={endGame} />}
      {gameStage === 'gameover' && <GameOver restartGame={restartGame} />}
    </div>
  );
}

export default App;
