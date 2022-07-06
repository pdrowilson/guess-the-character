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

  const [gameStage, setGameStage] = useState(stages[2].stage);
  const [characters] = useState(animeCharacters);

  console.log('teste', gameStage);
  console.log('data', characters);

  return (
    <div className="flex justify-center items-center h-screen w-full">
      {gameStage === 'start' && <StartScreen />}
      {gameStage === 'game' && <Game />}
      {gameStage === 'gameover' && <GameOver />}
    </div>
  );
}

export default App;
