import {
    NEW_GAME,
    ACTIVATE_SPACE,
    DISACTIVATE_SPACE
} from '../actions/types';

const INITIAL_STATE = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    11: null,
    12: null,
    13: null,
    14: null,
    15: null,
    16: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEW_GAME:
            return INITIAL_STATE;
        case ACTIVATE_SPACE:
            return { ...state, [action.data.id]: [action.data.amount] };
        case DISACTIVATE_SPACE:
            return { ...state, [action.data]: null };
        default:
            return state;
    }
};
