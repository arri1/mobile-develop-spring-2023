import React from "react";
import { Pressable, Text, FlatList, StyleSheet } from 'react-native'
import { useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "./Query";

const Apollo = () => {
    const { data, loading } = useQuery(CONTINENT_QUERY);

    const ContinentItem = ({ countries }) => {
      const { code } = countries;
      const { name } = countries;
      const { capital } = countries;
      const { emoji } = countries;

      return (
        <Pressable style={styles.country}>
          <Text>{code}</Text>
          <Text>{name}</Text>
          <Text>{capital}</Text>
          <Text>{emoji}</Text>

        </Pressable>
      );
    };

    if (loading) {
      return <Text>Loading</Text>
    }

    return (
        <FlatList style = {{backgroundColor: '#FF9200'}}
            data={data.countries}
            contentContainerStyle={{padding:30}}
            renderItem={({ item }) => <ContinentItem countries={item} />}
            keyExtractor={(item, index) => index}
        />
    );
}
const styles = StyleSheet.create({
    country:{
        backgroundColor: '#FFC373',
        fontFamily: 'font1', 
        fontSize: 25,
        justifyContent:"center",
        alignItems:"center", 
        height: 85, 
        width: 150, 
        marginBottom: 30, 
        marginLeft: 100, 
        borderRadius: 60,
    }
});

export default Apollo;