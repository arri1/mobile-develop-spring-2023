import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
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
      main: {
        display: 'flex',
        backgroundColor: '#FFD3B6',
        alignItems: 'center',
        height: '100%'
      },
      container: {
        top:-200,
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        marginTop:130,
        flexDirection: 'row',
        justifyContent: 'space-around',
        color:'black'
      },
      header:{
        width:"90%",
        elevation:16,
        backgroundColor:"white",
        height:"15%",
        borderBottomLeftRadius:80,
        borderBottomRightRadius:80,
        paddingHorizontal:6,
        flexDirection:"row",
        alignItems:"center",
        with:"100%"
      },
      text:{
        top:10,
        left:110,
        fontSize:28,
        color:"orange",
        fontWeight:"bold"
    }
})