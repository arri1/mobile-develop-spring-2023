import { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../redux/lab1Slice';

const colors = ["#DDD0C8", "#C8DDDB", "#C8CBDD"];

const Lab1 = () => {
    const value = useSelector((state) => state.lab1.value);

    const dispatch = useDispatch();

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
                        {value}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(increment());
                    }}
                    style={{
                        marginTop: 10,
                        borderRadius: 40,
                        height: 44,
                        marginLeft: 20,
                        marginRight: 20,
                        backgroundColor: colors[value % 3],
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text style={{ 
                        fontSize: 16,
                        color: "black"
                    }}>
                        Lorem ipsum dolor sit amet
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Lab1;
