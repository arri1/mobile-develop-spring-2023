import React, { useState, } from 'react';
import { View, Text, TextInput } from 'react-native';

type User = {
  id: number;
  name: string;
  age: number;
}

const users: User[] = [
  { id: 1, name: 'John', age: 20 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Bob', age: 25 },
  { id: 4, name: 'Alice', age: 22 },
];

const Lab3 = () => {
  const [filter, setFilter] = useState('');

  const filteredUsers = useMemo(() => {
    return users.filter(user => user.name.includes(filter));
  }, [filter]);

  return (
    <View>
      <TextInput value={filter} onChangeText={setFilter} />
      {filteredUsers.map(user => (
        <View key={user.id}>
          <Text>{user.name}</Text>
          <Text>{user.age}</Text>
        </View>
      ))}
    </View>
  );
};

export default Lab3;