import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const Details = (props) => {

    return ( 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => props.removeBarBadge()}
                style={[styles.btn, styles.btnNotPressed]}>
                    <Text style={{textAlign: 'center', fontSize: 20}}> Remove Bar Badge </Text>
            </TouchableOpacity>
            <Image source = {require('../assets/doom.jpg')}
                style = {{ width: "50%", height: "50%", resizeMode: "contain" }}
            />
        </View>
    );
};

export default Details;

const styles = StyleSheet.create({
    btn: {
        width: 200,
        height: 100,
        alignContent: 'center',
        justifyContent: 'center'
    },
    btnPressed: {
        backgroundColor: 'rgba(210,30,0,1)'
    },
    btnNotPressed: {
        backgroundColor: 'rgba(223, 28, 28, 1)'
    }
})
