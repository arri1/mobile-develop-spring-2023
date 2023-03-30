import React, { useState, useCallback, useEffect } from 'react';
import { Button,Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Cafe from './Cafe'
const App = () => {
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
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        style={styles.list}
        data={facts}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <Text style={styles.text}>{item.text}</Text>}
      />
      <Cafe/>
    </SafeAreaView>
        

  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 40,
    padding: 10,
    flex: 1,
  },
  text: {
    marginBottom: 15,
    fontSize: 10
  }
});

export default App;