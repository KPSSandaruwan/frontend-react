import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./tic-tac-toe.scss";
import instance from "../../utils/baseUrl";

const TicTacToe = () => {
  const { board, currentTurn, player, gameStatus} = useSelector((state) => state.game.game);
  const dispatch = useDispatch();


  useEffect(() => {
    const startGame = async () => {
      console.log("instance", instance);
      try {
        const response = await instance.post("auth/game/start", {
          username: "test"
        });
        if (response.data.success) {
          console.log("data", response.data);
          dispatch({
            type: "START_GAME",
            payload: {
              board: response.data.gameData.board,
              currentTurn: response.data.gameData.currentTurn,
              player: response.data.gameData.player,
              gameStatus: response.data.gameData.status
            }
          });
        }
      } catch (error) {}
    };

    startGame();
  }, [dispatch]);

  const handleClick = (index) => {
  };

  const resetGame = () => {
  };

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <div className="status">{gameStatus}</div>
      <div className="board">
      {board && board.length > 0 ? (
        board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <button
                key={colIndex}
                className="cell"
                onClick={() => handleClick(rowIndex, colIndex)}
              >
                {cell}
              </button>
            ))}
          </div>
        ))
      ) : (
        <p>No board data available</p> // Show this if board is not loaded
      )}
    </div>
      <button className="restart-btn" onClick={resetGame}>
        Restart Game
      </button>
    </div>
  );
};


export default TicTacToe;
