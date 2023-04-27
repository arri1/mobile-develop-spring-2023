import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { data } from '../assets/data/data'
import { NumberButton } from '../UI/NumberButton'
import { useSelector,useDispatch } from 'react-redux';
import { setCurrentNumber } from '../bll/reducer';

export const Lab6 = () => {
  const currentNumber = useSelector((state) => state.app.currentNumber)
  const dispatch = useDispatch()
  console.log(data)
  console.log(currentNumber)
  const onPressNumberButton = (number) => {
    dispatch(setCurrentNumber(number))
  }
  return (
    <SafeAreaView style={styles.wrapper}>
     <Text style = {styles.title}> {currentNumber} X</Text>
     <View style = {styles.tableBlock}>
      {data[currentNumber].map(item => <Text style ={styles.title}>{item}</Text>)}
     </View>
     <View style = {styles.btnsBlock}>
        <View style = {styles.row}>
          <NumberButton onPress={()=>{onPressNumberButton('1')}} title = {'1'}/>
          <NumberButton onPress={()=>{onPressNumberButton('2')}} title = {'2'}/>
          <NumberButton onPress={()=>{onPressNumberButton('3')}} title = {'3'}/>
          <NumberButton onPress={()=>{onPressNumberButton('4')}} title = {'4'}/>
          <NumberButton onPress={()=>{onPressNumberButton('5')}} title = {'5'}/>
        </View>
        <View style = {styles.row}>
          <NumberButton onPress={()=>{onPressNumberButton('6')}} title = {'6'}/>
          <NumberButton onPress={()=>{onPressNumberButton('7')}} title = {'7'}/>
          <NumberButton onPress={()=>{onPressNumberButton('8')}} title = {'8'}/>
          <NumberButton onPress={()=>{onPressNumberButton('9')}} title = {'9'}/>
          <NumberButton onPress={()=>{onPressNumberButton('10')}} title = {'10'}/>
        </View>

     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
    backgroundColor: '#FF9200',
    height: Dimensions.get('window').height,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'

  },
  tableBlock: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  btnsBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: "space-between",
    height: 120,
    paddingBottom: 90,
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    fontFamily: 'font1',
    fontSize: 25,
    color: 'black'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('window').width *.95,
    justifyContent:'space-between',
    justifyContent: 'space-around',
  }
});