import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Button from 'apsl-react-native-button';

import * as actions from '../actions';

class Dash extends Component {
    render() {
    const { newGame } = this.props;

        return (
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <Button
                    onPress={() => { newGame(); }}
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
            </View>
        );
    }
}

export default connect((state, ownProps) => {
    return { state, ownProps };
}, actions)(Dash);
