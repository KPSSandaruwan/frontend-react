// src/reducers/gameReducer.js

// Initial state of the game
const initialState = {
  game: {
    gameId: null,
    board: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ],
    currentTurn: null,
    player: null,
    gameStatus: "IN_PROGRESS"
  }
};

// Reducer function to manage game state
const gameReducer = (state = initialState, action) => {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        game: {
          ...state.game,
          gameId: action.payload.gameId,
          board: action.payload.board,
          currentTurn: action.payload.currentTurn,
          player: action.payload.player,
          gameStatus: action.payload.gameStatus
        }
      };
    case "PLAY_GAME":
      return {
        ...state,
        game: {
          ...state.game,
          board: action.payload.board,
          currentTurn: action.payload.currentTurn,
          gameStatus: action.payload.gameStatus
        }
      };
    // case 'RESET_GAME':
    //   return initialState;
    default:
      return state;
  }
};

export default gameReducer;
