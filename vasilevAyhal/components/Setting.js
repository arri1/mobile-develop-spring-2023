import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

import StylesContainers from './style/containers';
import StylesButtons from './style/buttons';
import StylesTexts from './style/texts';

const Setting = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    useMemo(
        () => {
            console.log('useMemo', count)
            let i = 100000000
            console.log(i)
            while(i >= 0) {
                i-=1
            }
            console.log(i)
        }, [count]
    )

    return (
        <View style={[StylesContainers.default, StylesContainers.screen, {gap: 50}]}>
            <View style={{alignItems: 'center', gap: 20}}>
                <View style={{flexDirection: 'row', gap: 10}}>
                    <Text> {count} с мемо </Text>
                    <Button title='-' onPress={() => setCount(count-1)}/>
                    <Button title='+' onPress={() => setCount(count+1)}/>
                </View>
                <View style={{flexDirection: 'row', gap: 10}}>
                <Text> {count2} без мемо </Text>
                    <Button title='-' onPress={() => setCount2(count2-1)}/>
                    <Button title='+' onPress={() => setCount2(count2+1)}/>
                </View>
            </View>

        </View>
    );
};
    
export default Setting;
