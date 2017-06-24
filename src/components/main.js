import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, AlertIOS, AsyncStorage, Text } from 'react-native';

import * as actions from '../actions';
import Dash from './dash';
import Board from './board';
// import Timer from './timer';

class Main extends Component {
    componentWillMount() {
        const { USER, updateState } = this.props;

        if (USER === null) {
            AsyncStorage.getItem('@USER')
                .then(STORED_USER => {
                    if (STORED_USER === null) {
                        this.triggerAlert();
                    } else {
                        updateState({
                            prop: 'USER',
                            value: STORED_USER
                        });
                    }
                });
        }
    }

    componentWillReceiveProps(nextProps) {
        const { USER } = nextProps;
        const { updateState } = this.props;

        if (USER === null) {
            AsyncStorage.getItem('@USER')
                .then(STORED_USER => {
                    if (STORED_USER === null) {
                        this.triggerAlert();
                    } else {
                        updateState({
                            prop: 'USER',
                            value: STORED_USER
                        });
                    }
                });
        }
    }

    triggerAlert() {
        const { updateState } = this.props;
        AlertIOS.prompt(
            'Matt\'s Birthday Surprise!!',
            'Enter your name:',
            [{
                text: 'Okay',
                onPress: (input) => {
                    if (input === '') {
                        AlertIOS.alert(
                            'Name cannot be blank!',
                            null,
                            [{
                                text: 'Okay',
                                onPress: () => {
                                    this.triggerAlert();
                                }
                            }]
                        );
                    } else {
                        AsyncStorage.setItem('@USER', input)
                            .then(() => {
                                updateState({
                                    prop: 'USER',
                                    value: input
                                });
                            });
                    }
                },
            }
            ],
            'plain-text'
        );
    }

    renderBoard() {
        const { USER, game } = this.props;
        const title1 = 'HAPPY BIRTHDAY MATT!!!';
        const title2 = 'Holmes\' Revenge';


        if (USER === null) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text
                        style={{
                            color: 'blue',
                            fontSize: 50,
                            letterSpacing: 10,
                            textAlign: 'center',
                            padding: 10,
                            marginTop: 10
                        }}
                    >
                        {title1}
                    </Text>
                </View>
            );
        }
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: 'white' }}>
                    <Text
                        style={{
                            color: 'blue',
                            fontSize: 27,
                            letterSpacing: 8,
                            textAlign: 'center',
                            padding: 10,
                            marginTop: 10
                        }}
                    >
                        {title2}
                    </Text>
                </View>
                <Board inGame={game.inGame} />
                <Dash />
            </View>
        );
    }

    // renderTimer() {
    //     // const { game } = this.props;
    //     //
    //     // if (game.inGame) {
    //     //     return <Timer />;
    //     // }
    //     // {this.renderTimer()}
    //
    //     return null;
    // }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.renderBoard()}
            </View>
        );
    }
}

export default connect(({ game, app }) => {
    const { USER } = app;

    return { USER, game };
}, actions)(Main);
