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
  // const [characters] = useState(animeCharacters);
  const [chosenCharacter, setChosenCharacter] = useState('');
  const [chosenAnime, setChosenAnime] = useState('');
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetter] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const getRandomAnimeAndChar = () => {
    const animes = Object.keys(animeCharacters);
    const anime = animes[Math.floor(Math.random() * Object.keys(animes).length)];
    const character = animeCharacters[anime][Math
      .floor(Math.random() * animeCharacters[anime].length)];
    return { character, anime };
  };

  const startGame = () => {
    const { character, anime } = getRandomAnimeAndChar();
    let splitedCharacterName = character.split('');
    splitedCharacterName = splitedCharacterName.map((l) => l.toLowerCase());

    setChosenAnime(anime);
    setChosenCharacter(character);
    setLetters(splitedCharacterName);
    setGameStage(stages[1].stage);
  };

  const verifyLetter = (l) => {
    console.log(l);
  };

  const restartGame = () => {
    setGameStage(stages[0].stage);
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      {gameStage === 'start'
        && (
        <StartScreen
          startGame={startGame}
        />
        )}
      {gameStage === 'game'
        && (
        <Game
          verifyLetter={verifyLetter}
          chosenAnime={chosenAnime}
          chosenCharacter={chosenCharacter}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
        )}
      {gameStage === 'gameover' && <GameOver restartGame={restartGame} />}
    </div>
  );
}

export default App;
