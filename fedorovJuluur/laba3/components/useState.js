import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const Cat = props => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View style={{padding:20, marginTop: 0,backgroundColor: 'rgba(500,600,247,800)'}}>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => {setIsHungry(false);}}
        disabled={!isHungry}
        title={isHungry ? 'Give me some food!' : 'Thank you very much!'}
      />
    </View>
  );
};

const useState = () => {
  return (
    <>
      <Cat name="Andrew" />
    </>
  );
};

export default useState;