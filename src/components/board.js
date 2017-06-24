import React from 'react';
import { View, Image } from 'react-native';
import Row from './row';

const dirtImg = require('../../ios/dirt.png');
const grassImg = require('../../ios/grass.png');
const holmesHeadImgProfile = require('../../ios/holmes-head-profile.png');
const holmesHeadImgBack = require('../../ios/holmes-head-back.png');

const Board = ({ inGame }) => {
    let holmesHeadImg = holmesHeadImgProfile;
    let rows = () => {
        return null;
    };

    if (inGame) {
        holmesHeadImg = holmesHeadImgBack;
        rows = () => {
            return (
                <View style={{ flex: 1 }}>
                    <Row key={1} />
                    <Row key={2} />
                    <Row key={3} />
                    <Row key={4} />
                </View>
            );
        };
    }

    return (
        <Image
            style={{
                flex: 1,
                width: null,
                height: null
            }}
            source={grassImg}
        >
            <Image
                style={{
                    flex: 1,
                    width: 320,
                    height: 320,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                source={dirtImg}
            >
                {rows}
            </Image>
                <View
                    style={{
                        width: 320,
                        height: 150
                    }}
                >
                    <Image
                        style={{
                            flex: 1,
                            resizeMode: 'stretch',
                            zIndex: 10
                        }}
                        source={holmesHeadImg}
                    />
                </View>
        </Image>
    );
};

export { Board };
