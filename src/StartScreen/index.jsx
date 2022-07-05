import React from 'react';
import './style.css';

function StartScreen() {
  return (
    <div className="p-6 bg-white flex flex-col">
      <h3 className="text-gray-900 rounded text-xl font-medium mb-6 uppercase">Guess the character</h3>
      <button className="btn" type="button">Start</button>
    </div>
  );
}

export default StartScreen;
