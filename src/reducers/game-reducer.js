import {
    NEW_GAME,
    UPDATE_SCORE
} from '../actions/types';

const INITIAL_STATE = {
     score: 0,
     lastScore: null,
 };

 export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
         case NEW_GAME: {
             const lastScore = state.score;
             return { ...state, ...INITIAL_STATE, lastScore };
        }
         case UPDATE_SCORE: {
             const { sign, amount } = action.data;
             let newScore = state.score;

             if (sign === '+') {
                 newScore += amount;
             } else if (sign === '-') {
                 newScore -= amount;
             }

             return { ...state, score: newScore };
         }
         default:
             return state;
     }
 };
