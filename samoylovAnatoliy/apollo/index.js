import React from "react";
import { View, Pressable, Text, FlatList, ScrollView } from 'react-native'
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
        <Pressable style={{height: 50, marginBottom: 30, backgroundColor: '#ffffff'}}>
            <Text>
                {name} 
                {code}
                {emoji}
                {awsRegion}
                {capital}
            </Text>
        </Pressable>
      );
    };

    if (loading) {
      return <Text>Loading...</Text>
    }

    return (
        <FlatList
            data={data.countries}
            contentContainerStyle={{padding: 30}}
            renderItem={({ item }) => <ContinentItem countries={item} />}
            keyExtractor={(item, index) => index}
            style={{backgroundColor: 'gray'}}
        />
    );
}

export default GraphQl;