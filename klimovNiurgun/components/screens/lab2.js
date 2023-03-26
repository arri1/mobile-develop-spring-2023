import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    TextInput,
} from "react-native";

import Constants from "expo-constants";
import { useEffect, useState } from "react";

const Lab2 = () => {
    const [word, setWord] = useState("Lorem ipsum");
    const [secondWord, setSecondWord] = useState("");

    useEffect(() => {
        let newWord = "";
        for (let i = word.length - 1; i >= 0; i--) {
            newWord += word[i];
        }
        setSecondWord(newWord)
    }, [word])

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.mainContainer}>
                <View style={styles.firstContainer}>
                    <Text style={styles.greenText}>{secondWord}</Text>
                </View>
                <View style={styles.secondContainer}>
                    <TextInput style={styles.blackText}
                        multiline
                        textAlign="center"
                        editable
                        value={word}
                        onChangeText={(text) => {
                            setWord(text);
                        }}
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
        paddingBottom: 20,
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
