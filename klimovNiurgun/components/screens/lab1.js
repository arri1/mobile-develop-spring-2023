import { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

const justify = ['center', 'flex-end', 'flex-start']

const Lab1 = () => {
    const [count, setCount] = useState(0);
    const [justifyContent, setJustifyContent] = useState(0);

    return (
        <SafeAreaView
            id="safe"
            style={{
                flex: 1,
                justifyContent: justify[justifyContent],
                backgroundColor: "white",
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
                        setCount(count + 1)
                        setJustifyContent((justifyContent + 1) % justify.length);
                    }}
                    style={{
                        marginTop: 10,
                        borderRadius: 40,
                        height: 44,
                        marginLeft: 20,
                        marginRight: 20,
                        backgroundColor: "#DDD0C8",
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
