import React from 'react';
import { View } from 'react-native';

import Space from './space';

const Row = ({ row }) => {
    const spacesKeys = [];

    for (let i = 1; i <= 4; i++) {
        const id = i + ((row - 1) * 4);

        spacesKeys.push(id);
    }

    return (
        <View style={{ width: 320, height: 80, flexDirection: 'row' }}>
            <Space num={spacesKeys[0]} />
            <Space num={spacesKeys[1]} />
            <Space num={spacesKeys[2]} />
            <Space num={spacesKeys[3]} />
        </View>
    );
};

export default Row;
