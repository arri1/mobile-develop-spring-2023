import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UseState from './UseState';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Suslonov</Text>
      <StatusBar style="auto" />
      <UseState/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
