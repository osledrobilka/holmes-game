import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, AlertIOS, AsyncStorage } from 'react-native';

import * as actions from '../actions';
import Dash from './dash';
import Board from './board';
import Timer from './timer';

class Main extends Component {
    componentWillMount() {
        const { app, updateState } = this.props;

        if (app.user === '') {
                AsyncStorage.getItem('@USER')
                    .then(USER => {
                        if (USER === null) {
                            AlertIOS.prompt(
                                'HAPPY BIRTHDAY TO MATT!',
                                'Enter your name to play Matt\'s birthday game:',
                                [{
                                    text: 'Okay',
                                    onPress: (input) => {
                                        AsyncStorage.setItem('@USER', input)
                                            .then(() => {
                                                updateState({
                                                    prop: 'USER',
                                                    value: input
                                                });
                                            });
                                    },
                                },
                                null
                                ],
                                'plain-text'
                            );
                        } else {
                            updateState({
                                prop: 'USER',
                                value: USER
                            });
                        }
                    });
        }
    }

    renderTimer() {
        // const { game } = this.props;
        //
        // if (game.inGame) {
        //     return <Timer />;
        // }

        return null;
    }

    render() {
        const { app, game } = this.props;

        return (
            <View style={{ flex: 1 }}>
                {this.renderTimer()}
                <Board inGame={game.inGame} />
                <Dash app={app} game={game} />
            </View>
        );
    }
}

export default connect(state => {
    const { game, app } = state;

    return { game, app };
}, actions)(Main);
