import {
    UPDATE_STATE,
    NEW_GAME,
    UPDATE_SCORE,
    SELECT_SPACE,
    ACTIVATE_SPACE,
    DISACTIVATE_SPACE
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

export const selectSpace = (id) => ({
    type: SELECT_SPACE,
    data: id
});

export const activateSpace = ({ id, amount }) => ({
    type: ACTIVATE_SPACE,
    data: { id, amount }
});

export const disactivateSpace = (id) => ({
    type: DISACTIVATE_SPACE,
    data: id
});
