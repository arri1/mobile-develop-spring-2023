import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from '../style.js';
import wordSlice, {editWord} from '../store/wordSlice';
import {setCustomText} from 'react-native-global-props';
const signMassive = ['+', '-', '*', '/'];
const task1 = () => {
  const [fisrstCount, setFisrstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const [sign, setSign] = useState(0);
  const dispatch = useDispatch();
  const [result, setResult] = useState(0);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 150,
      }}>
      <Text style={[styles.defaultText, styles.headerText1]}>Task 1</Text>
      <View style={{margin: 20, marginTop: 40, flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            setFisrstCount(fisrstCount + 1);
          }}
          style={[styles.defaultButton, styles.borderButton]}>
          <Text style={[styles.defaultText, styles.headerText2]}>
            {fisrstCount}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSign((sign + 1) % signMassive.length);
          }}
          style={[styles.defaultButton, styles.borderButton]}>
          <Text style={[styles.defaultText, styles.headerText2]}>
            {signMassive[sign]}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSecondCount(secondCount + 1);
          }}
          style={[styles.defaultButton, styles.borderButton]}>
          <Text style={[styles.defaultText, styles.headerText2]}>
            {secondCount}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{margin: 20}}>
        <TouchableOpacity
          onPress={() => {
            if (signMassive[sign] === '+') {
              setResult(fisrstCount + secondCount);
              dispatch(editWord(fisrstCount + secondCount));
            }
            if (signMassive[sign] === '*') {
              setResult(fisrstCount * secondCount);
              dispatch(editWord(fisrstCount * secondCount));
            }
            if (signMassive[sign] === '-') {
              setResult(fisrstCount - secondCount);
              dispatch(editWord(fisrstCount - secondCount));
            }
            if (signMassive[sign] === '/') {
              setResult(fisrstCount / secondCount);
              dispatch(editWord(fisrstCount / secondCount));
            }
          }}
          style={styles.defaultButton}>
          <Text style={[styles.defaultText, styles.headerText2]}>{result}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default task1;
