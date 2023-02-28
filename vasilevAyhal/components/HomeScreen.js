import React, { useState, useRef, useEffect } from "react";
import { View, ImageBackground, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Button,
    Animated, Dimensions } from 'react-native';

import NavigationTheme from './style/navigation'
import StylesContainers from './style/containers'
import StylesButtons from './style/buttons'
import StylesTexts from './style/texts'

import Psycho from '../assets/img/psycho.png'
import IconPlus from '../assets/svg/plus'

const windowDimensions = Dimensions.get('window');
const windowHeight = windowDimensions.height

const HomeRoute = ({ navigation }) => {

    return (
        <View style={StylesContainers.default}>
            <ImageBackground source={Psycho} style={styles.background}>
                <Text> asd </Text> 
            </ImageBackground>

            <View style={styles.content}>
                <TouchableOpacity activeOpacity={ 0.5 } style={StylesButtons.default}
                    onPress={() => navigation.navigate("Todo")}
                >
                    <Text style={StylesTexts.default}> Todo </Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={ 0.5 } style={StylesButtons.mini}
                    onPress={() => navigation.navigate("TodoAdd")}
                >
                    <IconPlus width={'80%'} height={'80%'} color={'#000000'}/>
                </TouchableOpacity>
                

                
            </View>
        </View>
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
        flexDirection: 'row',
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