import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        display: 'flex',
        backgroundColor: '#FDDF6D',
        alignItems: 'center',
        height: '100%'
      },
    header:{
        elevation:16,
        backgroundColor:"orange",
        height:"60%",
        borderBottomLeftRadius:0,
        borderBottomRightRadius:300,
        paddingHorizontal:20,
        flexDirection:"row",
        alignItems:"center"
    },
    text:{
        top:170,
        fontSize:28,
        color:"white",
        fontWeight:"bold"
    }
})