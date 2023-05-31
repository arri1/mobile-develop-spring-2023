import { useState, useMemo, useCallback } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native'

const withoutMemo = (num) => {
    let result = 0
    for (let i = 0; i < num; i++) {
        result += i
    }
    return result
}

const Task3 = () => {
    const [number, setNumber] = useState(500000)
    const [value, setValue] = useState(0)
    const [value2, setValue2] = useState(0)
    const withMemo = useMemo(() => withoutMemo, [])

    const handleClick = useCallback(() => {
        setValue(withMemo(number))
    }, [number])

    const handleChange = useCallback((text) => {
        const newNumber = parseInt(text, 10)
        setNumber(newNumber)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Number: {number}</Text>
            <Text style={styles.text}>Value 1: {value}</Text>
            <Text style={styles.text}>Value 2: {value2}</Text>
            <TouchableOpacity style={styles.button} onPress={handleClick}>
                <Text>Расчитать c useMemo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setValue2(withoutMemo(number))}
            >
                <Text>Расчитать</Text>
            </TouchableOpacity>
            <TextInput style={styles.input} onChangeText={handleChange} />
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
        fontSize: 20,
    },
    input: {
        width: 200,
        borderColor: '#fff',
        borderWidth: 1,
        marginTop: 10,
        color: 'white',
    },
})

export default Task3
