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
    const [word, setWord] = useState("");
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
                <Text style={styles.greenText}>{secondWord}</Text>
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "#787878",
        paddingTop: Constants.statusBarHeight,
    },
    mainContainer: {
        flex: 1,
        paddingBottom: 20,
        alignItems: "center",
    },
    greenText: {
        color: "#4caf50",
        fontSize: 30,
        textAlign: "center",
    },
    blackText: {
        color: "#000000",
        fontSize: 30,
        textAlign: "center",
        backgroundColor:"#ffffff"
    },
});

export default Lab2;
