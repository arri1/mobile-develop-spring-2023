import { Text, TouchableOpacity, View, StyleSheet, SafeAreaView, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/Slice";

const colors = ["#DDD0C8", "#C8DDDB", "#C8CBDD"];

const Lab4 = () => {
    const Lab1Value = useSelector((state) => state.Lab1.value);

    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.firstView}>
                <Text style={styles.value}>
                    {Lab1Value}
                </Text>
                <Text style={styles.buttonText}>
                    {"Counter + 1"}
                </Text>
                <TouchableOpacity style={[styles.button, { backgroundColor: "white" }]}
                    onPress={() => {
                        dispatch(increment());
                    }}
                />
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
        backgroundColor: "grey",
        justifyContent: "center",
    },
    value: {
        color: "white",
        fontSize: 20,
        alignSelf: "center",
    },
    button: {
        margin: 30,
        marginTop: -20,
        borderRadius: 10,
        height: 50,
    },
    buttonText: {
        margin: 30,
        color: "white",
        fontSize: 20, 
        fontWeight: "800",
    },
});

export default Lab4;