import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const Details = (props) => {
    const [isActive, setIsActive] = useState(false)
    return ( 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => props.removeBarBadge()}
                style={[styles.btn, isActive ? styles.btnPressed : styles.btnNotPressed]}>
                    <Text> Remove Bar Badge </Text>
            </TouchableOpacity>
            <Image source = {require('../assets/doom.jpg')}
                style = {{ width: "50%", height: "50%", resizeMode: "contain" }}
            />
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

export default Details