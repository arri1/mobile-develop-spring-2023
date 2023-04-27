import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { CONTINENT_QUERY } from "../compot/query";

const Lab6 = () => {
  const { data, loading } = useQuery(CONTINENT_QUERY);

  const ContinentItem = ({ countries }) => {
    const { name } = countries;
    const { currency } = countries;
  
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', height: 50, marginBottom: 30, backgroundColor: '#ffffff', borderRadius: 10}}>
        <Text>{name} {currency}</Text>
      </View>
    );
  };

  if (loading) {
    return <Text>Fetching data...</Text>
  }

  return (
    loading ? <Text>Loading...</Text>
    :
    <FlatList
      data={data.countries}
      contentContainerStyle={{padding: 30}}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => <ContinentItem countries={item} />}
    />
  );
};

export default Lab6;

