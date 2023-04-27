import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Lab5 = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter - 1);
    };

    return (
            <View style={styles.container}>
                <Text style={styles.title_text}>Counter App</Text>
                <Text style={styles.counter_text}>{counter}</Text>

                <TouchableOpacity onPress={handleIncrement} style={styles.btn}>
                    <Text style={styles.btn_text}> Increment </Text>
                </TouchableOpacity>

                <TouchableOpacity
                        onPress={handleDecrement}
                        style={{ ...styles.btn, backgroundColor: '#6e3b3b' }}>
                    <Text style={styles.btn_text}> Decrement </Text>
                </TouchableOpacity>
            </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C3B7B7',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 50,
    },
    title_text: {
        fontSize: 40,
        fontWeight: '900',
        marginBottom: 55,
    },
    counter_text: {
        fontSize: 35,
        fontWeight: '900',
        margin: 15,
    },
    btn: {
        backgroundColor: '#086972',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    btn_text: {
        fontSize: 23,
        color: '#fff',
    },
});

export default Lab5;