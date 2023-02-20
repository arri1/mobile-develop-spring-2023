import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Button } from 'react-native';


const HomeRoute = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("TodoAdd")}
            >
                <Text style={styles.text}> Todo Add </Text>
            </TouchableOpacity>
            

            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("Todo")}
            >
                <Text style={styles.text}> Todo </Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeRoute;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        alignItems: 'center',
        width: 200,
        padding: 20,
        margin: 10,
        backgroundColor: 'rgba(122, 244, 353, 1)',
    },
    text: {
        fontSize: 20,
        fontWeight: "normal",        
    }
})