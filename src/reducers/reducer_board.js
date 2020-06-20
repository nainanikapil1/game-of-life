import * as grid from '../utils/grid';

let DEFAULT_GRID_HEIGHT = 25;
let DEFAULT_GRID_WIDTH = 40;
const initState =  {
  height: DEFAULT_GRID_HEIGHT,
  width: DEFAULT_GRID_WIDTH,
  maingrid: grid.initGrid(DEFAULT_GRID_HEIGHT, DEFAULT_GRID_WIDTH) 
}
export default (state = initState, action) => {
  switch(action.type){
    case 'TOGGLE_ALIVE':
      let board = state.maingrid.slice(0);
      let cell = board[action.x][action.y];
      cell.status = !cell.status;
      cell.newBorn = !cell.newBorn;
      return {
        ...state,
        maingrid:board
      };
    case 'MAKE_RANDOM':
      return {
        ...state,
        height: action.height ,
        width: action.width ,
        maingrid: grid.initGrid(action.height, action.width, true),
      }; 
    case 'CLEAR':
      return {
        ...state,
        maingrid: grid.initGrid(state.height, state.height),
      }; 
    case 'TICK':
      return {
        ...state,
        maingrid: grid.advanceGrid(state.maingrid.slice(0)),
      };  
    default:
      return state;
  }
};
