import React, {useState, useMemo, useEffect, useCallback} from 'react';
import { Node } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Alert, FlatList, TouchableHighlight, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'


const Lab3 = () => {

    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)

    const num = 0
    
    const hardFunc = () => {
        for (i = 0; i <= 10000000; i++) {}
        return 1
    }

    const memoFunc = useMemo(() => hardFunc(num), [num])

    return (
        <SafeAreaView>
            
            <View style={styles.container}>

                <View style={styles.buttonStyle}>
                    
                    <View style={{alignItems: 'center'}}>
                        <View style={{flexDirection: 'row'}}>
                        
                            <Text style={styles.text}>{value1}</Text>
                            <AntDesign name='reload1' style={{color: 'red', fontSize: 30}} onPress={() => setValue1(0)}/>

                        </View>
                    </View>
                    
                    <View style={{alignItems: 'center'}}>
                        <AntDesign name='plussquare' style={{color: 'green', fontSize: 70}} onPress={() => setValue1(value1 + hardFunc())}/>
                    </View>

                </View>
                
                <View style={styles.buttonStyle}>

                    <View style={{alignItems: 'center'}}>
                        <View style={{flexDirection: 'row'}}>
                           
                            <Text style={styles.text}>{value2}</Text>
                            <AntDesign name='reload1' style={{color: 'red', fontSize: 30}} onPress={() => setValue2(0)}/>

                        </View>
                    </View>

                    <View style={{alignItems: 'center'}}>
                        <AntDesign name='plussquare' style={{color: 'green', fontSize: 70}} onPress={() => setValue2(value2 + memoFunc)}/>
                    </View>

                </View>

            </View>

        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'silver',
        marginTop: '20%'
    },
    text: {
        color: 'black',
        fontSize: 30,
    },
    buttonStyle: {
        margin: 15,
        width: 115,
    },
    input: {
        fontSize: 16,
        borderBottomWidth: 2,
        borderColor: 'black',
        width: 150,
    },
});

export default Lab3;