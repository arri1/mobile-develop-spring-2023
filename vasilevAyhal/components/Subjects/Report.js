import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import StylesContainers from '../style/containers'
import StylesTexts from '../style/texts'
import StylesButtons from '../style/buttons'
import StylesReport from './styles/report'

const windowWidth = Dimensions.get('window').width

const Report = (props) => {
    const storage = props.subjectId
    const [tasks, setTasks] = useState(0)
    const [tasksDone, setTasksDone] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(
        () => {
            getAllSubjectTask()
            setTimeout(() => {
                setLoading(false)
            }, 500)
        }, []
    )

    const getAllSubjectTask = async () => {
        try {
            let keys = []
            keys = await AsyncStorage.getAllKeys()
            if (keys !== null) {
                let _tasks = 0
                let _tasksDone = 0
                keys.map((key) => {
                    var promise = getItem(key)
                    promise.then(item => {
                        if(item.storage === storage) {
                            _tasks += 1
                            setTasks(_tasks)
                            if(item.isComplete) {
                                _tasksDone += 1
                                setTasksDone(_tasksDone)
                            }
                        }
                    })
                })
            }
        } catch (e) {
            alert('ERROR: getAllNote');
        }
    }

    const getItem = async (key) => {
        try {
            const itemValues = await AsyncStorage.getItem(key)
            if (itemValues !== null) {
                return JSON.parse(itemValues)
            }
            return alert('ERROR: Item null');
        } catch (e) {
            return alert('ERROR: getItem');
        }
    }

    return (
        <View style={[StylesContainers.screen, {flex: 1}]}>
            {
                loading ? <ActivityIndicator size="large" color="#00000050" style={{flex: 1}}/> :
                <View style={{flex: 1}}>
                    <View style={StylesReport.reportRow}>
                        <View style={[StylesReport.square, styles.square]}>
                            <Text style={StylesReport.textBig}> {tasks} </Text>
                            <Text style={StylesReport.textSmall}> Tasks </Text>
                        </View>
                        <View style={[StylesReport.square, styles.square]}>
                            <Text style={StylesReport.textBig}> {tasks===0 ? '0' : `${((tasksDone * 100) / tasks).toFixed(0)}%`} </Text>
                            <Text style={StylesReport.textSmall}> Done </Text>
                            <View style={{
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                                height: `${((tasksDone * 100) / tasks).toFixed(0)}%`,
                                backgroundColor: '#B2F7C1',
                                zIndex: -1
                            }}/>
                        </View>
                    </View>
                </View>
            }
        </View>
    );
};

export default Report;

const styles = StyleSheet.create({
    square: {
        width: windowWidth / 2 - StylesContainers.screen.padding * 1.5,
        height: windowWidth / 2 - StylesContainers.screen.padding * 1.5,
    }
})