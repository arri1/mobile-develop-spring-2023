import {ActivityIndicator, ScrollView, Text, View, StyleSheet} from 'react-native';
import {gql, useQuery} from '@apollo/client';

const GET_LAB6 = gql`
    query {
        countries {
            name
            code
        }
    }
`;

const Lab6 = () => {
    const {data, loading} = useQuery(GET_LAB6);

    console.log(data);

    if (loading)
        return (
            <View>
                <ActivityIndicator />
            </View>
        );
    return (
        <ScrollView>
            <View style={{marginLeft: 20}}>
                <Text style={styles.text}>List of {data.countries.length} countries</Text>
                {data.countries.map((item) => (
                    <Text key={item.code} style={styles.textCountries}>
                        {item.name}
                    </Text>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 20,
    },
    textCountries: {
        color: 'black',
        marginBottom: 4,
        fontSize: 14,
    }
})

 export default Lab6;
