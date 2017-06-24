import React from 'react';
import { View } from 'react-native';

import Space from './space';

const Row = ({ key }) => {
    const spacesKeys = [];

    for (let i = 1; i <= 4; i++) {
        const id = i + ((key - 1) * 4);

        spacesKeys.push(id);
    }

    return (
        <View style={{ width: 320, height: 80, flexDirection: 'row' }}>
            <Space key={spacesKeys[0]} />
            <Space key={spacesKeys[1]} />
            <Space key={spacesKeys[2]} />
            <Space key={spacesKeys[3]} />
        </View>
    );
};

export default Row;
