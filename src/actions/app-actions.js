import firebase from 'firebase';
import uuid from 'uuid';

import {
    GAMES_FETCH_SUCCESS,
    UPDATE_STATE
} from './types';

export const updateState = ({ prop, value }) => ({
    type: UPDATE_STATE,
    data: { prop, value }
});

export const gamesFetch = () => {
    return (dispatch) => {
        firebase.database().ref('/games')
            .on('value', snapshot => {
                const data = snapshot.val() || {};

                dispatch({ type: GAMES_FETCH_SUCCESS, data });
            });
    };
};

export const addScore = (args) => {
    return (dispatch) => {
        const { user, score } = args;
        firebase.database().ref('/games')
            .push({
                user,
                score,
                date: JSON.stringify(new Date()),
                uuid: uuid()
            })
            .then(() => {
                dispatch(gamesFetch);
            });
    };
};
