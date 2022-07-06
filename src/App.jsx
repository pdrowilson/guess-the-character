import { useEffect, useState, useCallback } from 'react';
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

  const getRandomAnimeAndChar = useCallback(() => {
    const animes = Object.keys(animeCharacters);
    const anime = animes[Math.floor(Math.random() * Object.keys(animes).length)];
    const character = animeCharacters[anime][Math
      .floor(Math.random() * animeCharacters[anime].length)];
    return { character, anime };
  }, [animeCharacters]);

  const clearLetterStages = () => {
    setGuessedLetters([]);
    setWrongLetter([]);
  };

  const startGame = useCallback(() => {
    clearLetterStages();
    const { character, anime } = getRandomAnimeAndChar();
    let splitedCharacterName = character.split('');
    splitedCharacterName = splitedCharacterName.map((l) => l.toLowerCase());

    setChosenAnime(anime);
    setChosenCharacter(character);
    setLetters(splitedCharacterName);
    setGameStage(stages[1].stage);
  }, [getRandomAnimeAndChar]);

  const verifyLetter = (l) => {
    const normalizedLetter = l.toLowerCase();

    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, l,
      ]);
    } else {
      setWrongLetter((actualWrongLetters) => [
        ...actualWrongLetters, normalizedLetter,
      ]);
      setGuesses((actulGuesses) => actulGuesses - 1);
    }
  };

  useEffect(() => {
    if (guesses <= 0) {
      clearLetterStages();
      setGameStage(stages[2].stage);
    }
  }, [guesses]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    console.log(uniqueLetters);
    console.log(guessedLetters);

    // win condition
    if (guessedLetters.length === uniqueLetters.length) {
      // add score
      // eslint-disable-next-line no-return-assign, no-param-reassign
      setScore((actualScore) => actualScore += 100);

      // restart game with new word
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  const restartGame = () => {
    setGuesses([3]);
    setGameStage(stages[0].stage);
    setScore(0);
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
      {gameStage === 'gameover' && <GameOver score={score} restartGame={restartGame} />}
    </div>
  );
}

export default App;
