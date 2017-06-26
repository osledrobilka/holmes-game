import React from 'react';
import { View, Image } from 'react-native';
import Row from './row';

const dirtImg = require('../../ios/dirt.png');
const grassImg = require('../../ios/grass.png');
const holmesHeadImgProfile = require('../../ios/holmes-head-profile.png');
const holmesHeadImgBack = require('../../ios/holmes-head-back.png');

const Board = ({ inGame }) => {
    let holmesHeadImg = holmesHeadImgProfile;

    if (inGame) {
        holmesHeadImg = holmesHeadImgBack;
    }

    return (
        <Image
            style={{
                width: null,
                height: null,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 200,
                margin: 0
            }}
            source={grassImg}
        >
            <Image
                style={{
                    width: 320,
                    height: 400,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    zIndex: 10
                }}
                source={dirtImg}
            >
                <View style={{ flex: 1 }}>
                    <Row num={1} />
                    <Row num={2} />
                    <Row num={3} />
                    <Row num={4} />
                </View>
            </Image>
            <View
                style={{
                    position: 'absolute',
                    bottom: 200,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    flex: 1,
                    flexDirection: 'row'
                }}
            >
                <Image
                    style={{
                        resizeMode: 'stretch',
                        flex: 1
                    }}
                    source={holmesHeadImg}
                />
            </View>
        </Image>
    );
};

export default Board;
