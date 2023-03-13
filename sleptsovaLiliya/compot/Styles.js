import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
      display: 'flex',
      backgroundColor: '#A8E6CF',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    },
    main2: {
      display: 'flex',
      backgroundColor: '#FDDF6D',
      alignItems: 'center',
      height: '100%'
    },
    main3: {
      display: 'flex',
      backgroundColor: '#FFD3B6',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    },
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
    buttonText: {
      color: 'black',
      fontSize: 20
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
    image: {
      width: 300,
      height: 375,
    }
  })