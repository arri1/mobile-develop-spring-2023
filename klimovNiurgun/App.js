import { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

const justify = ['center', 'flex-end', 'flex-start']

const App = () => {
  const [count, setCount] = useState(0);
  const [justifyContent, setJustifyContent] = useState(0);

  return (
    <SafeAreaView
      id="safe"
      style={{
        flex: 1,
        justifyContent: justify[justifyContent]
      }}>
      <View style={{ margin: 15 }}>
        <View style={{alignItems: "center"}}>
          <Text style={{
            color: "green",
            fontSize: 20,
            fontWeight: "800"}}>
              {count}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setCount(count + 1)
            setJustifyContent((justifyContent + 1) % justify.length);
          }}
          style={{
            marginTop: 10,
            borderRadius: 10,
            height: 40,
            backgroundColor: "blue" }}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;