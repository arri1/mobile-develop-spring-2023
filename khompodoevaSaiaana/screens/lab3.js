import React, { useState, useMemo } from "react";
import { View, StyleSheet } from "react-native";
import Pokemon from "../components/pokemon";
import AppButton from "../components/appButton";

const Lab3 = () => {
    const [number, setNumber] = useState(1);
    const [childRender, setChildRender] = useState(1);
    const memoChild = useMemo(() => <Pokemon/>, [childRender]);
    const handleOnClick = () => {
        setNumber(number + 1);
    }
    const reRender = () => {
        setChildRender(childRender + 1);
    }
    return (
        <View style={styles.container}>
            <Pokemon/>
            <AppButton onPress={() => handleOnClick()} title={number}/>
            <AppButton onPress={() => reRender()} title={childRender}/>
            {memoChild}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        alignSelf: 'center',
        width: 350,
        height: 350,
        resizeMode: 'contain',
    },
});

export default Lab3;