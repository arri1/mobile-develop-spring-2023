import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React , {useState} from 'react';
import MainContainer from "../AwesomeProject/app/index";


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
    
        <Button title="Change title" onPress={clickHandler}/>
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
