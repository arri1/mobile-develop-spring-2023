import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    default: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    screen: {
        padding: 30
    },
    fill: {
        width: '100%',
        height: '100%'
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000070',
    },
    modal: {
        width: '80%',
        padding: 30,
        backgroundColor: '#ffffff',
        borderRadius: 10,
    }
});