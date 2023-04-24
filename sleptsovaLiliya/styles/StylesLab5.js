import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header:{
    top:-210,
    elevation:16,
    backgroundColor:"white",
    height:"40%",
    borderBottomLeftRadius:0,
    borderBottomRightRadius:180,
    paddingHorizontal:6,
    flexDirection:"row",
    alignItems:"center"
  },
  main: {
    backgroundColor: 'grey',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
button: {
    top:-190,
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
  button3: {
    top:-60,
    elevation:6,
    height: 80,
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttontext: {
    color: 'black',
    fontSize: 20,
  },
  buttontext2: {
    top:-40,
    color: 'orange',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
    fontSize: 30
  },
  text:{
    top:10,
    left:160,
    fontSize:30,
    color:"orange",
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
    fontWeight:"bold",
 }
})