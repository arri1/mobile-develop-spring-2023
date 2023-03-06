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
    buttonsDefault: {
        width: 200,
        height: 50,
    },
    buttonFooter: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 20,
        width: '100%',
        zIndex: 10,
    }
});