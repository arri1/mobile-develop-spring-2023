import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Task1 = () => {
    const [state, setState] = useState(0)
    const incrementHandle = () => {
        setState(state + 1)
    }

    const decrementHandle = () => {
        setState(state - 1)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{state}</Text>
            <TouchableOpacity style={styles.button} onPress={incrementHandle}>
                <Text>Добавить</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={decrementHandle}>
                <Text>Отнять</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 200,
        marginTop: 10,
    },
    text: {
        color: 'white',
        fontSize: 30,
    },
})

export default Task1
