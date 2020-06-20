import { combineReducers } from 'redux';

import boardReducer from './reducer_board';
import gameStateReducer from './game_state';

const rootReducer = combineReducers({
  board: boardReducer,
  gameState: gameStateReducer,
});

export default rootReducer;
