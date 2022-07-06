import React, { useState, useRef } from 'react';

function Game({
  chosenAnime,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
  verifyLetter,
}) {
  const [letter, setLetter] = useState('');
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter('');

    letterInputRef.current.focus();
  };

  return (
    <div className="p-8 w-full mx-10 bg-white/[.6] flex flex-col items-center justify-center rounded text-gray-900 ">
      <h2 className="text-xl font-medium mb-6 uppercase rounded">
        Guess the character from:
        {' '}
        {chosenAnime.toUpperCase()}
      </h2>
      <div className="flex">
        <h4 className="mx-1 my-3 bg-white border-2 border-neutral rounded-md p-2 font-medium">
          Score:
          {' '}
          {score}
        </h4>
        <p className="mx-1 my-3 bg-white border-2 border-neutral rounded-md p-2 font-medium">
          {guesses}
          {' '}
          guesses left
        </p>
      </div>
      {/* <p className="text-gray-900 font-medium p-2">{chosenCharacter}</p> */}
      <div className="text-gray-900 font-medium flex">
        {letters.map((e) => (
          guessedLetters.includes((e)) ? (
            <p key={e} className="w-20 py-6 mx-3 bg-white rounded uppercase flex items-center justify-center">{e}</p>
          ) : <p key={e} className="w-20 py-6 mx-3 bg-white rounded uppercase flex items-center justify-center" />
        ))}
      </div>

      <p className="mx-1 my-3 bg-white border-2 border-neutral rounded-md p-2 font-medium">Wrong Letter:</p>
      {wrongLetters.map((e) => (
        <span key={e} className="mx-1 my-3 bg-white border-2 border-neutral rounded-md p-2 font-medium">
          {e}
        </span>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="w-20 mx-5 p-3 rounded text-center"
          type="text"
          name="letter"
          maxLength={1}
          required
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          ref={letterInputRef}
        />
        <button
          className="btn w-20"
          type="submit"
        >
          Guess
        </button>
      </form>
    </div>
  );
}

export default Game;
