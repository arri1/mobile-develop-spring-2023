import { useState, useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet, Button } from "react-native";

const Task2 = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });
    return (
        <SafeAreaView
            style={{
                backgroundColor: 'white',
                flex: 1,
                justifyContent: "center",
            }}
        >
            <View style={{ margin: 20 }}>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: "800" }}>
                        {count}
                    </Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Task2