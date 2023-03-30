import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

import StylesTexts from './style/texts';

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount } from './redux/counterSlice'


const Notification = (props) => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    return ( 
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 30 }}>
                <Text style={{textAlign: 'center', fontSize: 20}}> {count} </Text>

                <View style={{flexDirection: 'row', gap: 10}}>
                    <TouchableOpacity onPress={() => dispatch(decrement())} style={[styles.btn]}>
                        <Text style={[StylesTexts.default, {textAlign: 'center'}]}> - </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => dispatch(increment())} style={[styles.btn]}>
                        <Text style={[StylesTexts.default, {textAlign: 'center'}]}> + </Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    blurOnSubmit={false}
                    inputMode='numeric'
                    value={input}
                    onChangeText={t => setInput(t)}
                    style={{backgroundColor: '#ffffff', borderWidth: 2}}
                />
                <View style={{flexDirection: 'row', gap: 10}}>
                    <TouchableOpacity style={[styles.btn]} onPress={() => {if(input.length !== 0) dispatch(decrementByAmount(parseFloat(input))); setInput('')}}>
                        <Text style={[StylesTexts.default, {textAlign: 'center'}]}> decrement </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn]} onPress={() => {if(input.length !== 0) dispatch(incrementByAmount(parseFloat(input))); setInput('')}}>
                        <Text style={[StylesTexts.default, {textAlign: 'center'}]}> increment </Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
};

export default Notification;

const styles = StyleSheet.create({
    btn: {
        width: 200,
        height: 100,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
})
