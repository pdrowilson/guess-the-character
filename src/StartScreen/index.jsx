import React from 'react';
import './style.css';

function StartScreen({ startGame }) {
  return (
    <div className="p-8 w-full mx-10 h-2/5 bg-white/[.6] flex flex-col items-center justify-center rounded">
      <h3 className="text-gray-900 text-xl font-medium mb-6 uppercase rounded">Guess the character</h3>
      <button className="btn w-2/5" type="button" onClick={startGame}>Start</button>
    </div>
  );
}

export default StartScreen;
