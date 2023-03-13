import React, { useState, useMemo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Pokemon from "./pokemon";
 
TouchableOpacity.defaultProps = { activeOpacity: 0.6 };

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

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
    appButtonContainer: {
        backgroundColor: '#A3E4D7',
        borderRadius: 20,
        paddingVertical: 8,
        marginHorizontal: 40,
        marginVertical: 5,
    },
    appButtonText: {
        fontSize: 16,
        color: '#21618C',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});

export default Lab3;