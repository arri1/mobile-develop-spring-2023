import { Text, View, TouchableOpacity, SafeAreaView, StyleSheet,Image } from 'react-native'
import {useState} from 'react'
import {styles} from '../styles/StylesLab1'

const colours = ['#FDAD25', '#2BB140',  '#531A50', '#D71868']
const emojis = ["🍵","👽","🍀","🐢","🌺","🛸","🍱"]

const Lab1 = () => {
  const [count, setCount] = useState(0)
  const [currentColourIndex, setCurrentColourIndex] = useState(0)
  const [currentEmojiIndex, setcurrentEmojiIndex] = useState(0)

  const [showSquare, setshowSquare]= useState(false);
  const [showCircle, setshowCircle]= useState(true);
  const [showTriangle, setshowTriangle]= useState(false);

  const changeShape = (shape) => {
    setshowSquare(shape =='Square')
    setshowCircle(shape =='Circle')
    setshowTriangle(shape =='Triangle')
  }

  return (
    <SafeAreaView >
      <View style={styles.main}>
        <View style={styles.header}>
          <View style={{width:"40%"}}>
            <Text style={styles.text}>Lab One</Text>
          </View>
          <View style={{width:"50%",alignItems:"flex-end"}}>
            <Image source={require('../assets/1.png')}
              style={{left:-30,height:100,width:100,top:100}}
            />
          </View>
        </View>

        <View style={
            showSquare ? styles.Square :
            showCircle ? styles.Circle :
            showTriangle ? styles.Triangle : ''
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
            onPress={() => {setCurrentColourIndex((currentColourIndex + 1) % colours.length)}}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1}
            onPress={() => {setcurrentEmojiIndex((currentEmojiIndex + 1) % emojis.length)}}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.colorbutton, {backgroundColor:colours[currentColourIndex]}]}>
            <Text style={{top:0, fontSize:30}}>{emojis[currentEmojiIndex]}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Lab1;