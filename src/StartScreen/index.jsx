import React from 'react';
import './style.css';

function StartScreen() {
  return (
    <div className="p-8 w-2/6 h-2/5 bg-white/[.6] flex flex-col items-center justify-center rounded">
      <h3 className="text-gray-900 text-xl font-medium mb-6 uppercase rounded">Guess the character</h3>
      <button className="btn w-2/5" type="button">Start</button>
    </div>
  );
}

export default StartScreen;
