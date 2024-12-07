import React, { useState } from "react";

const Game = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [message, setMessage] = useState("");

  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const handleClick = (index) => {
    if (boxes[index] || message) return;
    const newBoxes = [...boxes];
    newBoxes[index] = isXNext ? "X" : "O";
    setBoxes(newBoxes);
    setIsXNext(!isXNext);

    const winner = checkWinner(newBoxes);
    if (winner) {
      setMessage(`Congratulations, Winner is ${winner}`);
    } else if (newBoxes.every((box) => box)) {
      setMessage("Game was a Draw!!");
    }
  };

  const checkWinner = (boxes) => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        return boxes[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoxes(Array(9).fill(null));
    setIsXNext(true);
    setMessage("");
  };

  return (
    <div className="game-div mt-[-20px] text-center">
      <div
        className={`msg-container flex-col font-playwrite-es my-[300px] ${
          message ? "" : "hidden"
        }`}
      >
        <p id="msg" className="text-[7vmin]">
          {message}
        </p>
        <button
          id="new-btn"
          onClick={resetGame}
          className="px-4 py-2 rounded-[15px] text-[1.25rem] bg-[#191913] text-white mt-[50px] mb-2"
        >
          New Game
        </button>
      </div>
      <main>
        <h1 className="text-[6vmin] font-serif font-[400] mt-[40px] mb-[6px]">
          Tic-tac-toe Game
        </h1>
        <div className="container h-[70vh] flex items-center justify-center mt-[-20px]">
          <div className="game h-[60vmin] w-[60vmin] flex flex-wrap items-center justify-center gap-[1.5vmin]">
            {boxes.map((box, index) => (
              <button
                key={index}
                className="box h-[18vmin] w-[18vmin] rounded-md border-none bg-[#ffcad4] shadow-[0_0_1rem_rgba(0,0,0,0.5)] text-[8vmin] text-[#191913]"
                onClick={() => handleClick(index)}
                disabled={!!box || !!message}
              >
                {box}
              </button>
            ))}
          </div>
        </div>
        <button
          id="reset-btn"
          onClick={resetGame}
          className="px-4 py-2 rounded-[15px] text-[1.25rem] bg-[#191913] text-white mt-2"
        >
          Reset Game
        </button>
      </main>
    </div>
  );
};

export default Game;
