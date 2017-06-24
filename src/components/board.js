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
                flex: 1,
                width: 300,
                height: 300
            }}
            source={grassImg}
        >
            <Image
                style={{
                    flex: 1,
                    width: 300,
                    height: 300,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                source={dirtImg}
            >
                <Row key={'row_1'} />
                <Row key={'row_2'} />
                <Row key={'row_3'} />
                <Row key={'row_4'} />
            </Image>
                <View
                    style={{
                        width: 300,
                        height: 150
                    }}
                >
                    <Image
                        style={{
                            flex: 1,
                            resizeMode: 'stretch',
                            zIndex: 99
                        }}
                        source={holmesHeadImg}
                    />
                </View>
        </Image>
    );
};

export { Board };
