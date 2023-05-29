import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const App = () => {
    const [state, setState] = useState(0)

    const increment = () => {
        setState(state + 1)
    }

    const decrement = () => {
        setState(state - 1)
    }

    return (
        <View style={styles.container}>
            <Text>{state}</Text>
            <TouchableOpacity style={styles.button} onPress={increment}>
                <Text>Добавить</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={decrement}>
                <Text>Отнять</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 200,
        marginTop: 10,
    },
})

export default App
