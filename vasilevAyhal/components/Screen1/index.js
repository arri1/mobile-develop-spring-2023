import React, { useState, useRef, useEffect } from "react";
import { Modal, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, RefreshControl } from 'react-native';

import StylesContainers from '../style/containers';
import StylesButtons from '../style/buttons';
import StylesTexts from '../style/texts';


const Screen1 = () => {
    return (
        <View style={StylesContainers.screen}>
            <Text> Screen1 </Text>
        </View>
    )
};

export default Screen1;
