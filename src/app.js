/* eslint no-underscore-dangle: 0 */
import React, { Component } from 'react';
import { View, AsyncStorage, AlertIOS } from 'react-native';
import { Provider } from 'react-redux';

import firebase from 'firebase';

import config from '../firebase-config';
import store from './store';
import * as actions from './actions';
import reducers from './reducers';
import Board from './components/board';
import Dash from './components/dash';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp(config);

        AsyncStorage.getItem('@USER')
            .then(USER => {
                if (USER === null) {
                    AlertIOS.prompt(
                        'HAPPY BIRTHDAY TO MATT!',
                        'Enter your username:',
                        [{
                            text: 'Okay',
                            onPress: (input) => {
                                AsyncStorage.setItem('@USER', input)
                                    .then(() => {
                                        store.dispatch(actions.updateState({
                                            prop: 'USER',
                                            value: input
                                        }));
                                    });
                            },
                        },
                        null
                        ],
                        'plain-text'
                    );
                } else {
                    store.dispatch(actions.updateState({
                        prop: 'USER',
                        value: USER
                    }));
                }
            });
    }

    render() {
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
