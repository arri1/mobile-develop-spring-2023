import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function App() {
    const [state, setState] = useState(0)
    return (
        <View style={styles.container}>
            <Text>{state}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setState(state + 1)}
            >
                <Text>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setState(state - 1)}
            >
                <Text>-1</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
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
