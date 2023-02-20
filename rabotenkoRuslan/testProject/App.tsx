import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {StyleSheet, Button, View, SafeAreaView, Text, Alert, BackHandler} from 'react-native';

const Separator = () => <View style={styles.separator} />;

interface IUser {
  name: string;
  email: string;
  username: string;
}

const ButtonApp: React.FC = () => {
  // Создание state с помощью useState
  const [count, setCount] = useState<number>(0);

  // Обработчик нажатия на кнопку, который изменяет состояние count
  const onPress = () => {
    setCount(count + 1);
  }
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
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{user.name}</Text>
        <Text>{user.username}</Text>
        <Text>{user.email}</Text>
      </View>
      <Separator />
      <View>
        <Text>You pressed the button {count} times</Text>
        <Button title="Press Me" onPress={onPress} />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Simple Button
        </Text>
        <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Button with adjusted color for every devices.
        </Text>
        <Button
          title="Press me"
          color="#d11c0f"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          All interaction for the component are disabled.
        </Text>
        <Button
          title="Press me"
          disabled
          onPress={() => Alert.alert('Cannot press this one')}
        />
      </View>
      <Separator />
    <View>
      <Text style={styles.title}>
        text anchored in the middle of the page.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert("Left Button Pressed")}
        />
        <Button
          title="Exit"
          onPress={() => BackHandler.exitApp()}
        />
      </View>
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'left',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ButtonApp;