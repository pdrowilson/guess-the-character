import React from 'react';

function GameOver() {
  return (
    <div className="p-8 w-2/6 h-2/5 bg-white/[.6] flex flex-col items-center justify-center rounded">
      <h3 className="text-gray-900 text-xl font-medium mb-6 uppercase rounded">Game Over</h3>
      <button className="btn w-2/5" type="button">Start</button>
    </div>
  );
}

export default GameOver;
