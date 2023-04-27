import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React , {useState} from 'react';


export default function App() {

  const [liked, setLiked] = useState(true);

  function handleChange(e) {
    setLiked(e.target.checked);
  }
  const [world,setUser] = useState('World')
  const clickHandler = () => {
    setUser('universe')
    
  }
  
  return (

    <View style={styles.container}>
      <Text>Hello-{world}!</Text>    
      <StatusBar style="auto" />
      <View style={styles.buttonstyle}>
      </View>
      </View>

    
  );
}

const styles = StyleSheet.create({
  buttonstyle: {
    marginTop: 10,
  },
  container: {
    flex: 10,
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
