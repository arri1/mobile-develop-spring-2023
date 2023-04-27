import React, { useState } from "react";
import { Text, View } from "react-native";



import {Button} from 'react-native';


const Cat = props => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text >
        I {props.name}, and I {isHungry ? 'died' : 'full'}!
      </Text>
      <Button 
        onPress={() => {setIsHungry(false);}}
        disabled={!isHungry}
        title={isHungry ? 'Give me some food!' : 'Am Alive!'}
      />
    </View>
  );
};

const lab1 = () => {
  return (
    <>
      <Cat name="Andrew" />
    </>
  );
};




export default lab1;
