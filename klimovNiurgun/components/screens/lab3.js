import { useEffect, useMemo, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
                    <Text>Press to switch</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    firstView: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        justifyContent: "center",
    },
    secondView: {
        flex: 1,
        backgroundColor: "#D5D5D5",
        justifyContent: "center",
    },
    button: {
      alignItems: "center",
      backgroundColor: "white",
      padding: 10,
      borderRadius: 20,
      margin: 20,
    },
});

export default Lab3;
