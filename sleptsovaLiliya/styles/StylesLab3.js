import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    top:100, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  main2: {
    top:200, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    top:-90,
    elevation:6,
    height: 80,
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button2: {
    left:90,
    top:-160,
    elevation:6,
    height: 80,
    width: '40%',
    backgroundColor: 'white',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttontext: {
    color: 'black',
    fontSize: 20
  },
  text3: {
    top:-130,
    left:130,
    fontSize:30,
    color:"orange",
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
    fontWeight:"bold",
  },
  text2: {
    top:-175,
    textShadowColor: 'grey',
    fontWeight:"bold",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
    fontSize: 25,
    color: 'white'
  },
  text: {
    top:-110,
    textShadowColor: 'grey',
    fontWeight:"bold",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
    fontSize: 25,
    color: 'white'
  },
  header:{
    elevation:16,
    backgroundColor:"white",
    height:"24%",
    borderBottomLeftRadius:180,
    borderBottomRightRadius:180,
    paddingHorizontal:6,
    flexDirection:"row",
    alignItems:"center"
  }
})