import { Text, View, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import {useState} from 'react'

const colours = ['black', 'red', 'green', 'blue', 'yellow', 'orange', 'purple']
export default function App() {
  const [count, setCount] = useState(0)
  const [currentColourIndex, setCurrentColourIndex] = useState(0)

  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View>
          <Text style={{fontSize: 30, color: colours[currentColourIndex]}}>{count}</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.buttonRed}
          onPress={() => {
            setCount(count-1)
          }}
          >
            <Text style={styles.buttonText}>-1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGreen}
            onPress={() => {
              setCount(count+1)
            }}
          >
            <Text style={styles.buttonText}>+1</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonSetColour}
            onPress={() => {
              setCurrentColourIndex((currentColourIndex + 1) % colours.length)
            }}
          >
            <Text style={styles.buttonText}>Change Colour</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  buttonRed: {
    height: 50,
    width: '30%',
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGreen: {
    height: 50,
    width: '30%',
    backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSetColour: {
    height: 50,
    width: '50%',
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
