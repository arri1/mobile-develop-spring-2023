import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import DarkModeButton from "../Lab5/DarkModeButton";
import { DEFAULT_MODE } from "../Lab5/DarkModeConstStates";

const Lab5 = ()=>{
    const darkModeState = useSelector(state=>state.darkMode.value)
    
    return(
    <View style={darkModeState==DEFAULT_MODE ? styles.container: styles.containerDark}>
        <DarkModeButton/>
    </View>);
}

export default Lab5;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    containerDark:{
      flex: 1,
      backgroundColor: "#1B1B1D"
    }
  });