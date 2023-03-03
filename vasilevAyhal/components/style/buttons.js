import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    default: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        borderRadius: 10,
    },
    buttonFill: {
        width: '100%',
        height: '100%',
    },
    buttonBig: {
        width: '72%',
        height: '100%',
    },
    buttonMini: {
        width: '25%',
        height: '100%',
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
        height: 50,
    }
});