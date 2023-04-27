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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      title_text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      counter_text: {
        fontSize: 36,
        marginBottom: 20,
      },
      btn: {
        backgroundColor: '#3f51b5',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10,
      },
      btn_text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
    
});

export default Lab5;