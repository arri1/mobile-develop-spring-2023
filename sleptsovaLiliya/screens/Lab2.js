import { Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import {useState,useEffect} from 'react'
import {styles} from '../compot/Styles'
import { ScrollView } from 'react-native-web'

const Lab2 = () => {
    
    return(
        <SafeAreaView >
        <View style={styles.main2}>
        <View style={{
        elevation:16,
        backgroundColor:"orange",
        height:"60%",
        borderBottomLeftRadius:0,
        borderBottomRightRadius:300,
        paddingHorizontal:20
      }}>
        <View style={{
          flexDirection:"row",
          alignItems:"center",
          marginTop:65,
          with:"100%"
        }}>
          <View style={{width:"50%"}}>
            <Text style={{
              top:200,
              fontSize:28,
              color:"white",
              fontWeight:"bold"
            }}>Lab Two</Text>
          </View>
          <View style={{width:"50%",alignItems:"flex-end"}}>
            <Image
            source={require('../assets/at.png')}
            style={{left:-50,height:295,width:310}}
             />
          </View>
       </View>
     </View>
        </View>
        </SafeAreaView>
    )
}

export default Lab2;