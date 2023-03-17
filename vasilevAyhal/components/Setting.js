import React, { useState, useMemo } from 'react';
import * as SQLite from 'expo-sqlite'
import { View, Text, TouchableOpacity, Button } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

import StylesContainers from './style/containers';
import StylesButtons from './style/buttons';
import StylesTexts from './style/texts';

const Setting = () => {
    const [showAlertDropTable, setShowAlertDropTable] = useState(false)
    
    const table = 'notes'
    const db = SQLite.openDatabase(`${table}.db`)
    
    const table2 = 'subjects'
    const db2 = SQLite.openDatabase(`${table2}.db`)
    
    const table3 = 'subject'
    const db3 = SQLite.openDatabase(`${table3}.db`)
    
    // const [count, setCount] = useState(0)
    // const [count2, setCount2] = useState(0)

    // useMemo(
    //     () => {
    //         console.log('useMemo', count)
    //         let i = 100000000
    //         console.log(i)
    //         while(i >= 0) {
    //             i-=1
    //         }
    //         console.log(i)
    //     }, [count]
    // )

    const getTable = () => {
        db.transaction(tx =>
            tx.executeSql(`SELECT * FROM ${table} ORDER BY id`, [],
                (_, res) => {
                    console.log(table)
                    for (let i = 0; i < res.rows.length; i++) {
                        console.log(res.rows.item(i))
                    }
                },
                (_, error) => console.log(error)
            )
        );
    }

    const getTable2 = () => {
        db2.transaction(tx =>
            tx.executeSql(`SELECT * FROM ${table2} ORDER BY id`, [],
                (_, res) => {
                    console.log(table2)
                    for (let i = 0; i < res.rows.length; i++) {
                        console.log(res.rows.item(i))
                    }
                },
                (_, error) => console.log(error)
            )
        );
    }

    const getTable3 = () => {
        db3.transaction(tx =>
            tx.executeSql(`SELECT * FROM ${table3} ORDER BY id`, [],
                (_, res) => {
                    console.log(table3)
                    for (let i = 0; i < res.rows.length; i++) {
                        console.log(res.rows.item(i))
                    }
                },
                (_, error) => console.log(error)
            )
        );
    }

    const dropTable = () => {
        db.transaction(tx =>
            tx.executeSql(`DROP TABLE ${table}`, [],
                (_, res) => { alert('Table dropped') }
            )
        )
    }

    const dropTable3 = () => {
        db3.transaction(tx =>
            tx.executeSql(`DROP TABLE ${table3}`, [],
                (_, res) => { alert('Table dropped') }
            )
        )
    }

    return (
        <View style={[StylesContainers.default, StylesContainers.screen, {gap: 50}]}>
            {/* <View style={{alignItems: 'center', gap: 20}}>
                <View style={{flexDirection: 'row', gap: 10}}>
                    <Text> {count} с мемо </Text>
                    <Button title='-' onPress={() => setCount(count-1)}/>
                    <Button title='+' onPress={() => setCount(count+1)}/>
                </View>
                <View style={{flexDirection: 'row', gap: 10}}>
                <Text> {count2} без мемо </Text>
                    <Button title='-' onPress={() => setCount2(count2-1)}/>
                    <Button title='+' onPress={() => setCount2(count2+1)}/>
                </View>
            </View> */}

            <View style={{alignItems: 'center', gap: 20}}>
                
                <TouchableOpacity
                    style={[StylesButtons.default, StylesButtons.buttonsDefault]}
                    onPress={() => getTable()}
                >
                    <Text style={[StylesTexts.default, StylesTexts.lightColor]}> Get table notes </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[StylesButtons.default, StylesButtons.buttonsDefault]}
                    onPress={() => getTable2()}
                >
                    <Text style={[StylesTexts.default, StylesTexts.lightColor]}> Get table subjects </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[StylesButtons.default, StylesButtons.buttonsDefault]}
                    onPress={() => getTable3()}
                >
                    <Text style={[StylesTexts.default, StylesTexts.lightColor]}> Get table subject </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[StylesButtons.default, StylesButtons.buttonsDefault]}
                    onPress={() => setShowAlertDropTable(true)}
                >
                    <Text style={[StylesTexts.default, StylesTexts.lightColor]}> Drop table notes </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[StylesButtons.default, StylesButtons.buttonsDefault]}
                    onPress={() => dropTable3(true)}
                >
                    <Text style={[StylesTexts.default, StylesTexts.lightColor]}> Drop table subject </Text>
                </TouchableOpacity>

            </View>

            <AwesomeAlert
                show={showAlertDropTable}
                title=" Внимание "
                message=" Вы уверены что хотите удалить все данные? "
                cancelText=" Нет "
                confirmText=" Да "
                confirmButtonTextStyle={{color: '#000000'}}
                cancelButtonStyle={{width: 50, alignItems: 'center'}}
                confirmButtonStyle={{width: 50, alignItems: 'center'}}
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                confirmButtonColor={StylesButtons.delete.backgroundColor}
                onCancelPressed={() => {
                    setShowAlertDropTable(false)
                }}
                onConfirmPressed={() => {
                    dropTable()
                    setShowAlertDropTable(false)
                }}
            />
        </View>
    );
};
    
export default Setting;
