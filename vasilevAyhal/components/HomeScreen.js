import React, { useState, useRef, useEffect } from "react";
import { View, ImageBackground, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Button,
    Animated, Dimensions } from 'react-native';

import StylesButtons from './style/buttons'
import StylesTexts from './style/texts'
import NavigationTheme from './style/navigation'

import Psycho from '../assets/img/psycho.png'

const windowDimensions = Dimensions.get('window');
const windowHeight = windowDimensions.height

const HomeRoute = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={Psycho} style={styles.background}>
                <Text> asd </Text> 
            </ImageBackground>

            <View style={styles.content}>
                <TouchableOpacity activeOpacity={ 0.5 } style={StylesButtons.default}
                    onPress={() => navigation.navigate("TodoAdd")}
                >
                    <Text style={StylesTexts.default}> Todo Add </Text>
                </TouchableOpacity>
                

                <TouchableOpacity activeOpacity={ 0.5 } style={StylesButtons.default}
                    onPress={() => navigation.navigate("Todo")}
                >
                    <Text style={StylesTexts.default}> Todo </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomeRoute;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    background: {
        position: 'absolute',
        alignItems: 'center',
        top: 0,
        width: '100%',
        height: windowHeight / 100 * 15,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        marginTop: windowHeight / 100 * 12,
        backgroundColor: NavigationTheme.colors.background,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: 'hidden',
    },
})