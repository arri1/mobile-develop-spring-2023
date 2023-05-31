import { View, Text, StyleSheet } from 'react-native'
import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from './query'
import { COLORS } from '../config'

const GraphQl = () => {
    const { loading, data } = useQuery(GET_CHARACTERS)

    if (loading) return <Text>Loading...</Text>

    return data.characters.results.map(({ id, name, image }) => (
        <View key={id} style={styles.block}>
            <Text style={styles.commonText}>{name}</Text>
        </View>
    ))
}
const styles = StyleSheet.create({
    block: {
        padding: 20,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    commonText: {
        fontStyle: 'normal',
        fontSize: 14,
        color: '#FEFAE0',
    },
})
export default GraphQl
