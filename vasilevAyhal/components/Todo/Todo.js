import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Button } from 'react-native';

import StylesContainers from '../style/containers'
import StylesTexts from '../style/texts'

const Todo = () => {

    return (
        <ScrollView>
            <View style={StylesContainers.screen}>
                <Text style={[StylesTexts.default, StylesTexts.lightColor]}>
                    Todo
                </Text>
                <TextInput
                    style={[StylesTexts.default, StylesTexts.lightColor, StylesTexts.input]}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="useless placeholder"
                    placeholderTextColor={StylesTexts.placeholder.color}
                    inputMode="text"
                />
            </View>
        </ScrollView>
    );
};

export default Todo;