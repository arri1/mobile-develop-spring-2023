import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, Image } from 'react-native';

type CarProps = {
  upgrade: string;
};

const Car = (props: CarProps) => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{props.upgrade} Level: {count}</Text>
      <Button
        onPress = {() => setCount(count + 1)}
        disabled = {count >= 10}
        title = {count < 10 ? "Click to upgrade" : "Max Level"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    width: 330,
    height: 180,
    alignContent: 'center',
    marginTop: 50,
    marginHorizontal: 30
  },
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Garage = () => {
  return (
    <>
      <Image source={{uri: 'https://static.tvtropes.org/pmwiki/pub/images/pimp_my_ride.png'}}
      style={styles.title}/>
      <Text style={{textAlign: 'center', color: 'blue', fontSize: 20, marginTop: 30}}>Крутая тачка</Text>
      <Car upgrade="Engine" />
      <Car upgrade="Suspention" />
      <Car upgrade="Wheels" />
      <Car upgrade="Bodywork" />
    </>
  )
}

export default Garage;