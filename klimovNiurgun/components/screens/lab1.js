import { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

const colors = ["#DDD0C8", "#C8DDDB", "#C8CBDD"]

const Lab1 = () => {
    const [count, setCount] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);

    return (
        <SafeAreaView
            id="safe"
            style={{
                flex: 1,
                backgroundColor: "white",
                justifyContent: "center",
            }}>
            <View style={{ backgroundColor: "white" }}>
                <View style={{ alignItems: "center" }}>
                    <Text style={{
                        color: "black",
                        fontSize: 20,
                    }}>
                        {count}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        setCount(count + 1);
                        setColorIndex((colorIndex + 1) % colors.length);
                    }}
                    style={{
                        marginTop: 10,
                        borderRadius: 40,
                        height: 44,
                        marginLeft: 20,
                        marginRight: 20,
                        backgroundColor: colors[colorIndex],
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text style={{ 
                        fontSize: 20,
                        color: "black"
                    }}>
                        Tap
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Lab1;
