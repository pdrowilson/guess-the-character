import React from 'react';

function Game({
  endGame, chosenAnime, chosenCharacter, letters,
}) {
  return (
    <div className="p-8 w-9/12 bg-white/[.6] flex flex-col items-center justify-center rounded">
      <h3 className="text-gray-900 text-xl font-medium mb-6 uppercase rounded">Guess the character from: {chosenAnime.toUpperCase()}</h3>
      {/* <p className="text-gray-900 font-medium p-2">{chosenCharacter}</p> */}
      <div className="text-gray-900 font-medium flex">
        {letters.map((e) => (
          <p className="w-20 py-6 mx-1 bg-white rounded uppercase flex items-center justify-center">{e}</p>
        ))}
      </div>
      <button className="btn w-2/5" type="button" onClick={endGame}>End</button>
    </div>
  );
}

export default Game;
