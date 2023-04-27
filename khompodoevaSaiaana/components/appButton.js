import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.6 };

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
    );

const styles = StyleSheet.create({
    appButtonContainer: {
        backgroundColor: '#A3E4D7',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 10,
        margin: 5,
    },
    appButtonText: {
        fontSize: 20,
        color: '#21618C',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});

export default AppButton;