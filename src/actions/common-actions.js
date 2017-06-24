import {
    UPDATE_STATE,
    NEW_GAME,
    UPDATE_SCORE
} from './types';

export const updateState = ({ prop, value }) => ({
    type: UPDATE_STATE,
    data: { prop, value }
});

export const newGame = () => ({
    type: NEW_GAME
});

export const updateScore = ({ sign, amount }) => ({
    type: UPDATE_SCORE,
    data: { sign, amount }
});
