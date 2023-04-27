import React from "react";
import { View, Pressable, Text, FlatList, StyleSheet } from 'react-native'
import { useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "./Query";

const GraphQl = () => {
    const { data, loading } = useQuery(CONTINENT_QUERY);

    const ContinentItem = ({ countries }) => {
      const { code } = countries;
      const { name } = countries;
      const { emoji } = countries;
      const { awsRegion } = countries;
      const { capital } = countries;
      

      return (
        <Pressable style={{height: 50, backgroundColor: '#8CA09D'}}>
            <Text style={styles.text}>
                {name}
            </Text>
        </Pressable>
      );
    };

    if (loading) {
      return <Text>Loading...</Text>
    }

    return (
        <View style={styles.container}>
             <View style={styles.list}>
                <FlatList
                    data={data.countries}
                    contentContainerStyle={{padding: 30}}
                    renderItem={({ item }) => <ContinentItem countries={item} />}
                    keyExtractor={(item, index) => index}
                />
            </View>
        </View>
    )  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AFC9C5',
        alignItems: 'center'
    },
    list: {
        alignItems: 'center',
        backgroundColor: '#8CA09D',
        width: 250
    },
    text: {
        textAlign: 'center',
        color: 'black',
        borderRadius: 5,
        backgroundColor: '#7A8C89',
        borderWidth: 1,
        fontFamily: 'AlumniSans-Regular',
        fontSize: 22,
    },
});

export default GraphQl;