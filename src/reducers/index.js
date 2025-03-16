import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import countReducer from "./countReducer";

const rootReducer = combineReducers({
  game: gameReducer,
  counter: countReducer
});

export default rootReducer;
