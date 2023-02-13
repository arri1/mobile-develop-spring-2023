import { Text, View, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import {useState} from 'react'
import {styles} from './Styles'

const colours = ['black', 'red', 'green', 'blue', 'yellow', 'orange', 'purple', '#7FFFD4']
export default function App() {
  const [count, setCount] = useState(0)
  const [currentColourIndex, setCurrentColourIndex] = useState(0)

  const [showSquare, setshowSquare]= useState(false);
  const [showCircle, setshowCircle]= useState(false);
  const [showTriangle, setshowTriangle]= useState(false);

  const changeShape = (shape) => {
    setshowSquare(shape =='Square')
    setshowCircle(shape =='Circle')
    setshowTriangle(shape =='Triangle')
  }

  return (
    <SafeAreaView>
      <View style={styles.main}> 
        <View style={
        showSquare ? styles2.Square :
        showCircle ? styles2.Circle :
        showTriangle ? styles2.Triangle : ''
        }
        />
          <Text style={{top: 200, fontSize: 40}}>{count}</Text>
        <View style={styles.container}>
          <TouchableOpacity style={styles.buttonRed}
          onPress={() => {
            setCount(count-1)
          }}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOrange}
            onPress={() => {
              setCount(count+1)
            }}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.container}>
        <TouchableOpacity style={styles.buttonYellow}
             onPress={() => changeShape('Square')}
          >
            <Text style={styles.buttonText}>Square</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGreen}
           onPress={() => changeShape('Circle')}
          >
            <Text style={styles.buttonText}>Circle</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.container}>
        <TouchableOpacity style={styles.buttonSkyblue}
           onPress={() => {
            setCurrentColourIndex((currentColourIndex + 1) % colours.length)
          }}
          >
            <Text style={styles.buttonText}>Next color</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBlue}
           onPress={() => {
            setCurrentColourIndex((currentColourIndex + 1) % colours.length)
          }}
          >
            <Text style={styles.buttonText}>Next color</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={{
          backgroundColor:colours[currentColourIndex],
          top:30,
          height: 60,
          width: '30%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 0
          }}
          onPress={() => {
            }}
          >
            <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
        <View style={styles.container}>
        <TouchableOpacity style={styles.buttonPurple}
           onPress={() => changeShape('Triangle')}
           >
             <Text style={styles.buttonText}>Triangle</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles2 = StyleSheet.create({
  Square:{
    top: 430,
  width: 70,
  height:70,
  backgroundColor: 'purple'
  },
  Circle:{
    top: 430,
    width:70,
    height:70,
    borderRadius: 70/2,
    backgroundColor: 'blue'
  },
  Triangle:{
    top: 430,
    width: 0,
    height: 0,
    borderLeftWidth:40,
    borderRightWidth:40,
    borderBottomWidth:80,
    borderStyle:'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'orange'
  }
}) 