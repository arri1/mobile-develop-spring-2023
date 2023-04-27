import { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, SafeAreaView } from "react-native";
import FirstSquare from "./lab3/firstSquare";
import SecondSquare from "./lab3/secondSquare";

const Lab3 = () => {
    const [isSelected, setSelection] = useState(true);

    const onPressHandler = () => {
        setSelection((prev) => !prev);
    };

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.firstView}>
                {isSelected ? <FirstSquare /> : <SecondSquare />}
            </View>
            <View style={styles.secondView}>
                <TouchableOpacity style={styles.button} onPress={onPressHandler}>
                    <Text style={styles.buttonText}>Press to switch</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "white",
    },
    firstView: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
    },
    secondView: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDD0C8",
      padding: 10,
      borderRadius: 20,
      margin: 20,
      height: 44,
      justifyContent: "center"
    },
    buttonText: {
        color: "black",
        fontSize: 16,
    }
});

export default Lab3;
