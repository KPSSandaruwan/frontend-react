import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./tic-tac-toe.scss";
import { instance } from "../../utils/baseUrl";

const TicTacToe = () => {
  const { board, currentTurn, player, gameStatus, gameId } = useSelector(
    (state) => state.game.game
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const startGame = async () => {
      try {
        const response = await instance.post("auth/game/start", {
          username: "test"
        });
        if (response.data.success) {
          console.log("data", response.data);
          dispatch({
            type: "START_GAME",
            payload: {
              gameId: response.data.gameData._id,
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

  const handleClick = async (rowIndex, colIndex) => {
    console.log("rowIndex", rowIndex);
    console.log("colIndex", colIndex);
    console.log("currentTurn", currentTurn);
    try {
      const response = await instance.post("auth/game/play", {
        gameId: gameId,
        row: rowIndex,
        col: colIndex,
        currentPlayer: currentTurn
      });
      console.log("response", response);
      if (response.data.success) {
        dispatch({
          type: "PLAY_GAME",
          payload: {
            board: response.data.gameData.board,
            currentTurn: response.data.gameData.currentTurn,
            gameStatus: response.data.gameData.status
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const resetGame = () => {};

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
