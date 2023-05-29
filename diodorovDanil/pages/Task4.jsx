import { StyleSheet, View } from 'react-native'
import GraphQl from '../graphql'

const Task4 = () => {
    return (
        <View style={styles.container}>
            <GraphQl />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    },
    block: {
        padding: 20,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
})

export default Task4
