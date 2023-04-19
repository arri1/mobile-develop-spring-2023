import React, { useReducer } from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import counterReducer from '../compot/reducers';
import { styles } from '../styles/StylesLab5'

function Lab5() {
  const [state, dispatch] = useReducer(counterReducer, { counter: 0 });

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <View style={{width:"100%"}}>
        <Image source={require('../assets/2.png')}
          style={{left:40,height:100,width:100,top:80}}
        />
          <Text style={styles.text}>Lab Five</Text>
        </View>
      </View>

      <Text style={styles.buttontext2}>Counter: {state.counter}</Text>

      <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'INCREMENT_COUNTER' })}>
        <Text style={styles.buttontext}>Increment</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button2} onPress={() => dispatch({ type: 'DECREMENT_COUNTER' })}>
        <Text style={styles.buttontext}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Lab5;
