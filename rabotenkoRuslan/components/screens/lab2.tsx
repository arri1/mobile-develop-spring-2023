import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {StyleSheet, Button, View, SafeAreaView, Text, Alert, BackHandler} from 'react-native';

interface IUser {
  name: string;
  email: string;
  username: string;
}

const Lab2: React.FC = () => {

  const [user, setUser] = useState<IUser>({ name: '', email: '' });
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/5');
        setUser({ name: response.data.name, username: response.data.username, email: response.data.email });
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>User:</Text>
        <Text>{user.name}</Text>
        <Text>{user.username}</Text>
        <Text>{user.email}</Text>
      </View>
    </SafeAreaView>
  );
}

export default Lab2;