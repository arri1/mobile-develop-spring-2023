import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const Home = (props) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => props.addBarBadge()}
                style={[styles.btn, isActive ? styles.btnPressed : styles.btnNotPressed]}>
                    <Text> Add Bar Badge </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        width: 200,
        height: 100
    },
    btnPressed: {
        backgroundColor: 'rgba(210,30,0,1)'
    },
    btnNotPressed: {
        backgroundColor: 'rgba(7,34,234,1)'
    }
})

export default Home