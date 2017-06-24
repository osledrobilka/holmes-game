/* eslint no-underscore-dangle: 0 */
import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import firebase from 'firebase';
import jwtDecode from 'jwt-decode';

import config from '../firebase-config';
import * as actions from './actions';
import reducers from './reducers';
import Board from './components/board';
import Dash from './components/dash';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged(user => {
            console.log('user (app) --> ', user);
            this.refreshToken();
        });
    }

    refreshToken(force = false) {
        const ref = firebase.auth().currentUser;
        if (ref !== null) {
            return ref.getToken(force).then(encodedToken => {
                const token = jwtDecode(encodedToken);
                const value = token.exp;
                const secondsToExpiry = value - (new Date().getTime() / 1000);
                const fiveMins = 45 * 60;
                setTimeout(() => this.refreshToken(true), (secondsToExpiry - fiveMins) * 1000);
                console.log('refreshToken, seconds to expiry --> ', value);
                AsyncStorage.multiSet([['@AUTH_EXPIRY', JSON.stringify(value)], ['@UID', ref.uid]]);
            });
        } else if (ref === null) {
            AsyncStorage.multiRemove(['@AUTH_EXPIRY', '@UID']);
        }

        return;
    }

    render() {
        const store = createStore(
            reducers,
            {},
            applyMiddleware(ReduxThunk)
        );

        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <Board />
                    <Dash />
                </View>
            </Provider>
        );
    }
}

export default App;
