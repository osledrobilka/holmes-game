import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, AlertIOS } from 'react-native';

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
            updateScore({ sign: '+', amount: state[selected] });
            selectSpace(selected);
            disactivateSpace(selected);
        }
    }

    render() {
        const { selected } = this.props;
        return {
            <View style={{ flex: 1 }}>
                <Board />
            </View>
        }
    }
