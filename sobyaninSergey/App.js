import { useState } from 'react';
import { TouchableOpacity, View, Dimensions } from "react-native";

const App = () => {
  const [size, setSize] = useState(100);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={{     
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black" 
    }}>
    <TouchableOpacity
      onPress={() => {
        if (size > windowWidth || size > windowHeight) {
          setSize(100)
        }
        else setSize(size + 50)
      }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: '#004524',
      }}
    />
  </View>
  );
};

export default App;
