import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    default: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        borderRadius: 10,
    },
    buttonSquare: {
        width: 50,
        height: 50,
    },
    
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
        height: 50,
    },
    buttonRowFill: {
        width: '100%',
        height: '100%',
    },
    buttonRowBig: {
        width: '72%',
        height: '100%',
    },
    buttonRowMini: {
        width: '25%',
        height: '100%',
    },
});