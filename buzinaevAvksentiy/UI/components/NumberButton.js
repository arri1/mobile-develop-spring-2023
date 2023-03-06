import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { COLORS } from '../../assets/Styles'



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
        backgroundColor:COLORS.blue,
        width: 70,
        height: 50,
        borderRadius: 30,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:25,
        color: 'black',
        textAlign:'center',
    }
})


