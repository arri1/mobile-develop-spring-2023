import React, { useState, useCallback, useEffect } from 'react';
import { Button,Text, FlatList, View } from 'react-native';

const [facts, setFacts] = useState([]);

const handleFetchCatFacts = useCallback(async () => {
  const result = await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=4');
  const facts = await result.json();
  if (result.ok) {
    setFacts(facts);
  }
});

useEffect(() => {
    handleFetchCatFacts();
}, []);
return (
  <View style={{ fontSize: 20, flex: 2, justifyContent: 'center', alignItems: 'center' }}>
    <FlatList
      style={styles.list}
      data={facts}
      keyExtractor={item => item._id}
      renderItem={({ item }) => <Text style={styles.text}>{item.text}</Text>}
    />
    <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
  </View>
);

export default useEffect;