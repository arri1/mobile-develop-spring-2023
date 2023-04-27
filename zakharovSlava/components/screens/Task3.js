import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';


const Task3 = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const num = 0;

    const Func = () => {
        for (i = 0; i <= 10000000; i++) { }
        return 1;
    };

    const memof = useMemo(() => Func(num), [num]);

    return (
        <SafeAreaView
            style={{
                backgroundColor: 'white',
                flex: 1,
                justifyContent: "center",
            }}
        >
            <View style={{ margin: 70 }}>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: "800" }}>
                        c useMemo: {count}
                    </Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => setCount(count + memof)} >
                    <Text style={{ color: 'white' }}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={{ margin: 70 }}>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: "800" }}>
                        без useMemo: {count2}
                    </Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => setCount2(count2 + + Func())} >
                    <Text style={{ color: 'white' }}>+</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    button: {
        alignItems: 'center',
        backgroundColor: "#696D70",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
        margin: 5,

    }
});

export default Task3;