import { combineReducers } from 'redux';
import GameReducer from './game-reducer';
import AppReducer from './app-reducer';

export default combineReducers({
    game: GameReducer,
    app: AppReducer
});
