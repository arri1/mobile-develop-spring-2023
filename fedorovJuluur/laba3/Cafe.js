import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
const Cat = props => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View style={{ flex:2,padding:10, marginTop: 10,backgroundColor: 'rgba(500,600,247,800)'}}>
      <Text>
        I am {props.name}, and I am {isHungry ? 'dying' : 'full'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Give me some food!' : 'Thank you very much!'}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <>
      <Cat name="Andrew" />
      <Cat name="Spoke" />
    </>
  );
};

export default Cafe;