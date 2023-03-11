import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TouchableOpacity } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

import StylesContainers from './style/containers';
import StylesButtons from './style/buttons';
import StylesTexts from './style/texts';

const Setting = () => {
    const [showAlertClearData, setShowAlertClearData] = useState(false)

    const getAllStorage = async () => {
        try {
            console.log("keys")
            let keys = []
            keys = await AsyncStorage.getAllKeys()
            if (keys !== null) {
                keys.map(
                    (key) => {
                        var promise = getStorage(key)
                        promise.then(item => {
                            console.log(item)
                        })
                    }
                )
            }
        } catch (e) {
            alert('ERROR: getAllStorage');
        }
    }
    
    const getStorage = async (key) => {
        try {
            const itemValues = await AsyncStorage.getItem(key)
            if (itemValues !== null) {
                return JSON.parse(itemValues)
            }
            return alert('ERROR: Item null');
        } catch (e) {
            return alert('ERROR: getStorage');
        }
    }

    const clearStorage = async () => {
        try {
            await AsyncStorage.clear();
            alert('Storage was clear');
        } catch (e) {
            alert('ERROR: clearStorage');
        }
    }

    return (
        <View style={[StylesContainers.default, StylesContainers.screen]}>
            <View style={{alignItems: 'center', gap: 20}}>
                
                <TouchableOpacity
                    style={[StylesButtons.default, StylesButtons.buttonsDefault]}
                    onPress={() => getAllStorage()}
                >
                    <Text style={[StylesTexts.default, StylesTexts.lightColor]}> Get all data </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[StylesButtons.default, StylesButtons.buttonsDefault]}
                    onPress={() => setShowAlertClearData(true)}
                >
                    <Text style={[StylesTexts.default, StylesTexts.lightColor]}> Clear data </Text>
                </TouchableOpacity>

            </View>

            <AwesomeAlert
                show={showAlertClearData}
                title=" Внимание "
                message=" Вы уверены что хотите удалить все данные? "
                cancelText=" Нет "
                confirmText=" Да "
                cancelButtonStyle={{width: 50, alignItems: 'center'}}
                confirmButtonStyle={{width: 50, alignItems: 'center'}}
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                confirmButtonColor="#FFA9A1"
                onCancelPressed={() => {
                    setShowAlertClearData(false)
                }}
                onConfirmPressed={() => {
                    clearStorage()
                    setShowAlertClearData(false)
                }}
            />
        </View>
    );
};
    
export default Setting;
