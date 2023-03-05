import React, { useState, useRef, useEffect } from "react";
import { View, ImageBackground, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Button,
    Animated, Dimensions } from 'react-native';

import NavigationTheme from './style/navigation'
import StylesContainers from './style/containers'
import StylesButtons from './style/buttons'
import StylesTexts from './style/texts'

import Psycho from '../assets/img/psycho.png'

const windowDimensions = Dimensions.get('window');
const windowHeight = windowDimensions.height

const HomeRoute = ({ navigation }) => {

    return (
        <ScrollView>

            <View style={StylesContainers.default}>
                <ImageBackground source={Psycho} style={styles.background}>
                </ImageBackground>

                <View style={[styles.content]}>
                    <View style={StylesButtons.buttonsRow}>
                        <TouchableOpacity activeOpacity={ 0.5 } style={[StylesButtons.default, StylesButtons.buttonRowFill]}
                            onPress={() => navigation.navigate("Todo")}
                        >
                            <Text style={[StylesTexts.default, StylesTexts.lightColor]}> Todo </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default HomeRoute;

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        alignItems: 'center',
        top: 0,
        width: '100%',
        height: windowHeight / 100 * 15,
    },
    content: {
        alignItems: 'center',
        flex: 1,
        width: '100%',
        paddingTop: 30,
        marginTop: windowHeight / 100 * 12,
        gap: 40,
        backgroundColor: NavigationTheme.colors.background,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: 'hidden',
    },
})