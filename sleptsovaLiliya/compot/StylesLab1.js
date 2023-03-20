import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button1: {
        elevation:6,
        top:10,
        height: 40,
        width: '30%',
        backgroundColor: 'white',
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      button2: {
        elevation:6,
        height: 100,
        width: '30%',
        backgroundColor: 'white',
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      colorbutton:{
        top:-115,
        elevation:6,
        borderRadius: 25,
        height:'90%',
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0
     },
      main: {
        display: 'flex',
        backgroundColor: '#A8E6CF',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      },
      container: {
        top: -180,
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        marginTop:130,
        flexDirection: 'row',
        justifyContent: 'space-around',
        color:'black'
      },
      buttonText: {
        color: 'black',
        fontSize: 20
      },
      header:{
        elevation:16,
        backgroundColor:"white",
        height:"50%",
        borderBottomLeftRadius:80,
        borderBottomRightRadius:80,
        paddingHorizontal:6,
        flexDirection:"row",
        alignItems:"center",
        with:"100%"
      },
     text:{
        top:100,
        left:45,
        fontSize:28,
        color:"black",
        fontWeight:"normal"
     },
     Square:{
      right:50,
      top: 250,
    width: 90,
    height:90,
    backgroundColor: '#2E8B57'
    },
    Circle:{
      right:50,
      top: 250,
      width:90,
      height:90,
      borderRadius: 180/2,
      backgroundColor: '#536872'
    },
    Triangle:{
      right:50,
      top: 250,
      width: 0,
      height: 0,
      borderLeftWidth:45,
      borderRightWidth:45,
      borderBottomWidth:90,
      borderStyle:'solid',
      backgroundColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'orange'
    }
})