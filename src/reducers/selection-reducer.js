import {
    SELECT_SPACE
} from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case SELECT_SPACE: {
            let id = action.data;
            if (state === id || !id) {
                id = null;
            }
            return id;
        }
        default:
            return state;
    }
};
