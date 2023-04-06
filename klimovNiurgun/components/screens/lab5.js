import { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, SafeAreaView, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/lab1Slice";
import { newText } from "../../redux/lab2Slice";

const colors = ["#DDD0C8", "#C8DDDB", "#C8CBDD"];

const Lab5 = () => {
    const [text, setText] = useState("L")

    const lab1value = useSelector((state) => state.lab1.value);

    const lab2texts = useSelector((state) => state.lab2);

    const dispatch = useDispatch();
    
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.firstView}>
                <Text style={styles.value}>
                    {lab1value}
                </Text>
                <TouchableOpacity style={[styles.button, { backgroundColor: colors[lab1value % 3] }]}
                    onPress={() => {
                        dispatch(increment());
                    }}
                >
                    <Text style={styles.buttonText}>
                        {"Lorem ipsum dolor sit amet"}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.secondView}>
                <Text style={styles.secondViewTopText}>
                    {lab2texts.reversedText}
                </Text>
                <TextInput style={styles.textInput}
                        multiline
                        textAlign="center"
                        editable
                        value={lab2texts.text}
                        onChangeText={(text) => {
                            dispatch(newText(text));
                            setText(text);
                        }}
                        autoCorrect={false}
                        autoCapitalize="none"
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
        backgroundColor: "white",
        justifyContent: "center",
    },
    secondView: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
    },
    value: {
        fontSize: 20,
        alignSelf: "center",
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20,
        height: 44,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 16,
    },
    secondViewTopText: {
        fontSize: 20,
        textAlign: "center",
    },
    textInput: {
        fontSize: 20,
    },
});

export default Lab5;
