import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableHighlight, Image } from 'react-native';

import * as actions from '../actions';

const pupImg = require('../../ios/pup.png');
const pupImgSelected = require('../../ios/pup_selected.png');

// const holeImg = require('../../ios/hole.png');
// const pawImg = require('../../ios/paw.png');
// const annaImg = require('../../ios/anna.png');
// const mattImg = require('../../ios/matt.png');
// const aliImg = require('../../ios/ali.png');
// const pupImg = require('../../ios/pup.png');
// const annaImgSelected = require('../../ios/anna_selected.png');
// const mattImgSelected = require('../../ios/matt_selected.png');
// const aliImgSelected = require('../../ios/ali_selected.png');
// const pupImgSelected = require('../../ios/pup_selected.png');

class Space extends Component {
    state = {
        value: null,
        selected: false
    };

    componentReceiveProps(nextProps) {
        if (nextProps.inGame) {
            this.makeInactive();
            this.startTimer();
        }
    }

    selectSpace(id) {
        const { inGame } = this.props;

        if (inGame) {
            console.log('selected id --> ', id);
            this.setState({ selected: true });
            this.scoreSelection();
        }
    }

    unSelect() {
        this.setState({ selected: false });
    }

    scoreSelection() {
        const { value } = this.state;

        const { updateScore } = this.props;

        if (value === 0) {
            updateScore({ sign: '-', amount: 100 });
            this.unSelect();
        } else {
            updateScore({ sign: '+', amount: value });
            this.setState({ value: null });
            this.unSelect();
        }
    }

    startTimer() {
        const { endGame } = this.props;
		const that = this;
		setTimeout(() => {
            that.setState({ value: null });
            endGame();
        }, 30000);
    }

    makeActive() {
        const that = this;
        const randomValue = ((Math.floor(Math.random()) * (11 - 1)) + 1);
        let value = 200;
        let mSeconds = 3;

        if (randomValue < 5) {
            value = 100;
            mSeconds = 4;
        } else if (randomValue === 8 || randomValue === 9) {
            value = 500;
            mSeconds = 2;
        } else if (randomValue === 10) {
            value = 1000;
            mSeconds = 1;
        }

        this.setState({ value });

        setTimeout(() => { that.makeInactive(); }, mSeconds);
    }

    makeInactive() {
        const randomSeconds = Math.ceil(((Math.random() * 10) + 3) * 1000);
		this.setState({ value: 0 });
		const that = this;
		setTimeout(() => { that.makeActive(); }, randomSeconds);
    }

    renderPersonImg() {
        const { selected, value } = this.state;
        if (value !== 0 && value !== null) {
            let personImg = pupImg;

        //     // if (value === 200) {
        //     //     // personImg = 'annaImg';
        //     // } else if (value === 500) {
        //     //     // personImg = 'aliImg';
        //     // } else if (value === 1000) {
        //     //     // personImg = 'pupImg';
        //     // }
        //
            if (selected) {
                personImg = pupImgSelected;
                // personImg = `${personImg}Selected`;
            }
            return <Image source={personImg} style={{ zIndex: 6, flex: 1 }} />;
        // // } else if (selected) {
        //     // return <Image source={pawImg} style={{ zIndex: 6 }} />;
        //
        //     // <Image source={holeImg} style={{ zIndex: 7 }} />
        }
        return null;
    }

    render() {
        const { num } = this.props;

        return (
            <TouchableHighlight
                onPress={this.selectSpace.bind(this, num)}
                style={{ width: 80, height: 80, position: 'relative', flexDirection: 'row' }}
            >
                <Image source={pupImg} style={{ zIndex: 9, flex: 1 }} />;
            </TouchableHighlight>

        );
    }
}

export default connect((state, ownProps) => {
    const { num } = ownProps;
    const { game } = state;
    const inGame = game.inGame;

    return { num, inGame };
}, actions)(Space);
