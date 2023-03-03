import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Todo: { flex: 1, gap: 20, },
    TodoItemContainer: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 6,
        elevation: 6, // shadow for android
        overflow: 'hidden',
    },
    TodoItem: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FAF9CA',
    },
    TodoItemSwipe: { justifyContent: 'center', width: '100%', },
    TodoItemSwipeLeft: { alignItems: 'flex-start', backgroundColor: '#CCFFC9' },
    TodoItemSwipeRight: { alignItems: 'flex-end', backgroundColor: '#FFA9A1' },
});