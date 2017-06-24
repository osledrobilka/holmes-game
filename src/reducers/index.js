import { combineReducers } from 'redux';
import GameReducer from './game-reducer';
import AppReducer from './app-reducer';
import SelectionReducer from './selection-reducer';
import SpacesReducer from './spaces-reducer';

export default combineReducers({
    game: GameReducer,
    app: AppReducer,
    selected: SelectionReducer,
    spaces: SpacesReducer
});
