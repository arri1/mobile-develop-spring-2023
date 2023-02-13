import { useState } from "react";
import {Image, ImageBackground, StyleSheet, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import image_btn1 from "./images/sun.png";

const colors = ["green", "white", "orange", "black"];
const img = {uri: './images/sun.png'};
const App = () => {
  const [count, setCount] = useState(0);
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);
    return (
      <SafeAreaView
          style={{
            backgroundColor: colors[backgroundColorIndex],
            flex: 1,
            justifyContent: "center",
          }}
      >
        <View style={{ margin: 15 }}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "blue", fontSize: 20, fontWeight: "800" }}>
              {count}
            </Text>
          </View>
            <View style={{ marginTop:40, alignItems: "center" }}>
                <Text style={{ color: "red", fontSize: 20, fontWeight: "800" }}>
                    click
                </Text>
            </View>
          <TouchableOpacity
              onPress={() => {
                  setCount(count + 1);
              }}

              style={{
                marginTop: 40,
                borderRadius: 10,
                height: 40,
                backgroundColor: colors[(backgroundColorIndex + 1) % colors.length],
              }}

          />

            <View style={{ marginTop:40, alignItems: "center" }}>
                <ImageBackground source={img} resizeMode="cover" style={styles.image}>
                    <Text style={{ color: "red", fontSize: 20, fontWeight: "800" }}>
                        Touch for moon
                    </Text>
                </ImageBackground>
            </View>
            <TouchableOpacity
                onPress={() => {
                    setBackgroundColorIndex((backgroundColorIndex + 1) % colors.length);
                }}
                style={{
                    marginTop: 10,
                    borderRadius: 10,
                    height: 40,
                    backgroundColor: colors[(backgroundColorIndex + 1) % colors.length],
                }}
            />
        </View>

      </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    }
});
export default App;
