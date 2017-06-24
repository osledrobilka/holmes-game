import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import * as actions from '../actions';
import Dash from './dash';
import Board from './board';

class Main extends Component {
    componentWillReceiveProps(nextProps) {
        const { selected } = this.props;

        if (nextProps.selected !== selected && nextProps.selected !== null) {
            this.scoreSelection(nextProps);
        }
    }

    scoreSelection(nxtProps) {
        const {
            selected,
            spaces
        } = nxtProps;
        const {
            disactivateSpace,
            selectSpace,
            updateScore
        } = this.props;

        if (spaces[selected] === null) {
            updateScore({ sign: '-', amount: 100 });
            selectSpace(selected);
        } else if (spaces[selected] !== null) {
            updateScore({ sign: '+', amount: spaces[selected] });
            selectSpace(selected);
            disactivateSpace(selected);
        }
    }

    render() {
        const { selected, spaces, app, game } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Board selected={selected} spaces={spaces} />
                <Dash app={app} game={game} />
            </View>
        );
    }
}

export default connect(state => {
    const { game, app, selected, spaces } = state;

    return { game, app, selected, spaces };
}, actions)(Main);
