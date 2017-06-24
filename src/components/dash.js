import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import Button from 'apsl-react-native-button';

import * as actions from '../actions';

class Dash extends Component {
    renderButton() {
        const { inGame } = this.props;
        if (inGame) {
            return null;
        }

        return (
            <View>
                <Button
                    onPress={() => { this.props.newGame(); }}
                    style={{
                        backgroundColor: 'blue',
                        borderColor: 'blue',
                        borderRadius: 5,
                        marginRight: 10,
                        marginLeft: 10
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            letterSpacing: 2,
                            fontSize: 20
                        }}
                        numberOfLines={1}
                    >
                        Start Game
                    </Text>
                </Button>
                <Button
                    onPress={() => {
                        AsyncStorage.removeItem('@USER')
                            .then(() => {
                                this.props.updateState({
                                    prop: 'USER',
                                    value: null
                                });
                            });
                    }}
                    style={{
                        backgroundColor: 'white',
                        borderColor: 'white',
                        borderRadius: 5,
                        marginRight: 10,
                        marginLeft: 10
                    }}
                >
                    <Text
                        style={{
                            color: 'blue',
                            letterSpacing: 2,
                            fontSize: 20
                        }}
                        numberOfLines={1}
                    >
                        Change User
                    </Text>
                </Button>
            </View>
        );
    }

    render() {
        return (
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                {this.renderButton()}
            </View>
        );
    }
}

export default connect(({ game }) => {
    const inGame = game.inGame;

    return { inGame };
}, actions)(Dash);
