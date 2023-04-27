import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView} from 'react-native';

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counter'


const Taskredux = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <SafeAreaView
            style={{
                backgroundColor: 'white',
                flex: 1,
                justifyContent: "center",
            }}
        >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 30 }}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: "800" }}> {count} </Text>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <TouchableOpacity onPress={() => dispatch(decrement())} style={[styles.button]}>
                        <Text style={{ color: 'white'}}> - </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => dispatch(increment())} style={[styles.button]}>
                        <Text style={{ color: 'white'}}> + </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Taskredux;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#696D70',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
        margin: 5,
    }
})