import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header:{
    top:-250,
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
    top:-150,
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
    top:-40,
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