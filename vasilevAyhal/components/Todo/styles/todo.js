import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Todo: { flex: 1, gap: 20, },
    TodoAddButton: {
        alignItems: 'center',
        width: '50%',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 6,
        elevation: 6, // shadow for android
        backgroundColor: '#fff',
    },
    TodoItemContainer: {
        width: '100%',
        borderRadius: 10,
        shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 6,
        elevation: 6, // shadow for android
        overflow: 'hidden',
    },
    TodoItem: {
        width: '100%',
        padding: 10,
        gap: 10,
        backgroundColor: '#D5E9F7',
    },
    TodoItemSwipe: { justifyContent: 'center', width: '100%', paddingHorizontal: 10 },
});