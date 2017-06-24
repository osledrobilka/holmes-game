import {
    NEW_GAME,
    UPDATE_SCORE,
    ACTIVATE_SPACE,
    DISACTIVATE_SPACE,
    UPDATE_SELECTION
} from './types';

export const newGame = () => ({
    type: NEW_GAME
});

export const updateScore = ({ sign, amount }) => ({
    type: UPDATE_SCORE,
    data: { sign, amount }
});

export const updateSelection = (data) => ({
    type: UPDATE_SELECTION,
    data
});

export const activateSpace = ({ id, amount }) => ({
    type: ACTIVATE_SPACE,
    data: { id, amount }
});

export const disactivateSpace = (id) => ({
    type: DISACTIVATE_SPACE,
    data: id
});
