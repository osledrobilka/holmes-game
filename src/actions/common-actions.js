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

export const updateScore = ({ action, amount }) => ({
    type: UPDATE_SCORE,
    data: { action, amount }
});
