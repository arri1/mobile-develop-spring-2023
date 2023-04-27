import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native'


export const NumberButton = (props) => {
    const { title, onPress } = props
    return (
        <TouchableOpacity onPress = {onPress} style= {styles.wrapper}>
            <Text style = {styles.title}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles  = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor:'#FFC373',
        width: 60,
        height: 50,
        borderRadius: 30,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontFamily: 'font1',
        fontSize:25,
        color: 'black',
        textAlign:'center',
    }
})
