import {
    UPDATE_STATE,
    GAMES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
     user: '',
     games: [],
     userBestScore: null,
     userScoreHistory: [],
     allTimeBestScore: null
 };

 export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
         case UPDATE_STATE:
            return { ...state, [action.data.prop]: action.data.value };
        case GAMES_FETCH_SUCCESS: {
            const data = action.data || {};
            const userScoreHistory = [];
            let games = Object.keys(data).map(uid => {
               return { ...data[uid], uid };
            });

            games = games.sort((x, y) => {
                return x.score - y.score;
            });

            const allTimeBestScore = games[0];

            games.forEach(game => {
                if (game.user === state.user) {
                    userScoreHistory.push(game);
                }
            });

            const userBestScore = userScoreHistory[0];

            return {
                ...state,
                games,
                userBestScore,
                userScoreHistory,
                allTimeBestScore
            };
        }
         default:
             return state;
     }
 };
