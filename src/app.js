/* eslint no-underscore-dangle: 0 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import firebase from 'firebase';

import config from '../firebase-config';
import store from './store';
import Main from './components/main';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <Main />
                </View>
            </Provider>
        );
    }
}

export default App;
