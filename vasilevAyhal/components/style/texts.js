import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    default: {
        fontSize: 20,
        fontWeight: '600',
    },
    header: {
        fontSize: 18,
        fontWeight: '600',
    },
    big: {
        fontSize: 26,
        fontWeight: '600',
    },
    small: {
        fontSize: 14,
        fontWeight: '400',
    },
    lightColor: {
        color: "#ffffff"
    },
    fadeColor: {
        color: "#00000075"
    },
    placeholder: {
        color: "#a9a9a9"
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#ffffff',
        // borderStyle: 'solid',
        // borderColor: '#000000',
        // borderBottomWidth: 2,
        borderRadius: 10,
        shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 6,
        elevation: 6, // shadow for android
    },
    inputMulti: {
        maxHeight: 150,
        paddingVertical: 5,
        textAlignVertical: 'top',
        // borderRightWidth: 2,
    },
});