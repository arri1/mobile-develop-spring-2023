import { Text, View, TouchableOpacity, SafeAreaView, StyleSheet,Image } from 'react-native'
import {useState} from 'react'
import {styles} from '../compot/Styles'

const colours = ['#FDAD25', '#2BB140',  '#531A50', '#D71868']
const emojis = ["🍵","👽","🍀","🐢","🌺","🛸","🍱"]

const Lab1 = () => {
  const [count, setCount] = useState(0)
  const [currentColourIndex, setCurrentColourIndex] = useState(0)
  const [currentEmojiIndex, setcurrentEmojiIndex] = useState(0)

  const [showSquare, setshowSquare]= useState(true);
  const [showCircle, setshowCircle]= useState(false);
  const [showTriangle, setshowTriangle]= useState(false);

  const changeShape = (shape) => {
    setshowSquare(shape =='Square')
    setshowCircle(shape =='Circle')
    setshowTriangle(shape =='Triangle')
  }

  return (
    <SafeAreaView >
       <View style={styles.main}> 
      <View style={{
        elevation:16,
        backgroundColor:"white",
        height:"50%",
        borderBottomLeftRadius:80,
        borderBottomRightRadius:80,
        paddingHorizontal:0
      }}>
        <View style={{
          flexDirection:"row",
          alignItems:"center",
          marginTop:220,
          with:"100%"
        }}>
          <View style={{width:"40%"}}>
            <Text style={{
              left:45,
              fontSize:28,
              color:"black",
              fontWeight:"normal"
            }}>Lab One</Text>
          </View>
          <View style={{width:"50%",alignItems:"flex-end"}}>
            <Image
            source={require('../assets/kk.jpg')}
            style={{left:10,height:130,width:150}}
             />
          </View>
       </View>
     </View>
        <View style={
        showSquare ? styles2.Square :
        showCircle ? styles2.Circle :
        showTriangle ? styles2.Triangle : ''
        }
        />
          <View style={styles.container}>
        <TouchableOpacity style={styles.button2}
             onPress={() => changeShape('Square')}
          >
            <Text style={styles.buttonText}>Square</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}
           onPress={() => changeShape('Circle')}
          >
            <Text style={styles.buttonText}>Circle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}
           onPress={() => changeShape('Triangle')}
           >
             <Text style={styles.buttonText}>Triangle</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.button1}
          onPress={() => {
            setCurrentColourIndex((currentColourIndex + 1) % colours.length)
          }}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}
            onPress={() => {
              setcurrentEmojiIndex((currentEmojiIndex + 1) % emojis.length)
            }}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
          backgroundColor:colours[currentColourIndex],
          top:-115,
          elevation:6,
          borderRadius: 25,
          height:'90%',
          width: '30%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 0
          }}
          onPress={() => {
            }}
          >
            <Text style={{top:0, fontSize:30}}>{emojis[currentEmojiIndex]}</Text>
        </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  )
}

const styles2 = StyleSheet.create({
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

export default Lab1;