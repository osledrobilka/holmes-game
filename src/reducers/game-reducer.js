import {
    END_GAME,
    NEW_GAME,
    UPDATE_SCORE,
    UPDATE_SELECTION
} from '../actions/types';

const INITIAL_STATE = {
     score: 0,
     lastScore: null,
     inGame: false,
     selected: null
 };

 export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
         case NEW_GAME: {
             const lastScore = state.score || null;
             return { ...state, ...INITIAL_STATE, lastScore, inGame: true };
        }
        case END_GAME:
            return { ...state, inGame: false };
        case UPDATE_SELECTION: {
            const selected = action.data.id || null;

            return { ...state, selected };
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
