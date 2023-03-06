import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

import StylesContainers from './style/containers';
import StylesButtons from './style/buttons';
import StylesTexts from './style/texts';

const Setting = () => {
    const [showAlertClearData, setShowAlertClearData] = useState(false)
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
            <View style={{alignItems: 'center'}}>
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
