import React from 'react';

function Game({
  endGame, 
  chosenAnime, 
  chosenCharacter, 
  letters, 
  guessedLetters, 
  wrongLetters,
  guesses,
  score
}) {
  return (
    <div className="p-8 w-full mx-10 bg-white/[.6] flex flex-col items-center justify-center rounded text-gray-900 ">
      <h2 className="text-xl font-medium mb-6 uppercase rounded">Guess the character from: {chosenAnime.toUpperCase()}</h2>
      <div className='flex'>
        <h4 className='mx-1 my-3 bg-white border-2 border-neutral rounded-md p-2 font-medium'>
          Score: {score}
        </h4>
        <p className='mx-1 my-3 bg-white border-2 border-neutral rounded-md p-2 font-medium'>
          {guesses} guesses left
        </p>
      </div>
      {/* <p className="text-gray-900 font-medium p-2">{chosenCharacter}</p> */}
      <div className="text-gray-900 font-medium flex">
        {letters.map((e, i) => (
          guessedLetters.includes((e)) ? (
            <p key={i} className="w-20 py-6 mx-3 bg-white rounded uppercase flex items-center justify-center">{e}</p>
          ) : <p key={i} className="w-20 py-6 mx-3 bg-white rounded uppercase flex items-center justify-center"></p>
        ))}
      </div>

      <p className='mx-1 my-3 bg-white border-2 border-neutral rounded-md p-2 font-medium'>Wrong Letter:</p>
      {wrongLetters.map((e, i) => (
        <span key={i} className='mx-1 my-3 bg-white border-2 border-neutral rounded-md p-2 font-medium'>
          {e}
        </span>
      ))}
      <button className="btn w-2/5" type="button" onClick={endGame}>End</button>
    </div>
  );
}

export default Game;
