import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    TextInput,
} from "react-native";

import Constants from "expo-constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newText, newReversedText } from "../../redux/lab2Slice";

const Lab2 = () => {
    const text = useSelector((state) => state.lab2.text);

    const state = useSelector(state => state);

    const dispatch = useDispatch()

    useEffect(() => {
        let newWord = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newWord += text[i];
        }
        dispatch(newReversedText(newWord));
    }, [text])

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.mainContainer}>
                <View style={styles.firstContainer}>
                    <Text style={styles.greenText}>{state.lab2.reversedText}</Text>
                </View>
                <View style={styles.secondContainer}>
                    <TextInput style={styles.blackText}
                        multiline
                        textAlign="center"
                        editable
                        value={text}
                        onChangeText={(text) => {
                            dispatch(newText(text));
                        }}
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Constants.statusBarHeight,
    },
    mainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    firstContainer: {
        marginLeft: 20,
        marginRight: 20,
    },
    secondContainer: {
        marginLeft: 20,
        marginRight: 20,
    },
    greenText: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
    },
    blackText: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
        backgroundColor:"#ffffff"
    },
});

export default Lab2;
