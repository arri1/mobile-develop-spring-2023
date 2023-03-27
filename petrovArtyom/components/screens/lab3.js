import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  FlatList,
} from "react-native";
import { useState, useMemo } from "react";

const data = [
  {id: 1, state: 'Молоко', rating: 4.5},
  {id: 2, state: 'Сыр', rating: 3},
  {id: 3, state: 'Чеснок', rating: 4},
  {id: 4, state: 'Броколи', rating: 5},
  {id: 5, state: 'Шаурма', rating: 4.5},
  {id: 6, state: 'Хлеб', rating: 3},
  {id: 7, state: 'Колбаса', rating: 2},
  // ...
  // {id: 1000, state: 'asd', rating: 2},
]


const Lab3 = () => {
  const rateCompare = 3;

    const computedValue = useMemo(() => {
        const result = data.filter((d) => d.rating > rateCompare);
        return result;
    }, [rateCompare]);

      const renderItem = ({ item }) => (
          <View style={{padding: 10, paddingLeft: 10}}>
            <Text>{item.state}</Text>
          </View>
      );
    return (
        <FlatList
          data={computedValue}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
    )
};



export default Lab3;
