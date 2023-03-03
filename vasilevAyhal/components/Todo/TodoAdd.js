import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Button } from 'react-native';

import StylesContainers from '../style/containers'
import StylesTexts from '../style/texts'

const TodoAdd = () => {

    return(
        <View style={StylesContainers.screen}>
            <TextInput
                style={[StylesTexts.default, StylesTexts.lightColor, StylesTexts.input]}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Title"
                placeholderTextColor={StylesTexts.placeholder.color}
                inputMode="text"
            />
            <TextInput
                style={[StylesTexts.default, StylesTexts.lightColor, StylesTexts.input]}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Title"
                placeholderTextColor={StylesTexts.placeholder.color}
                inputMode="numeric"
            />
        </View>
    );
};

export default TodoAdd;