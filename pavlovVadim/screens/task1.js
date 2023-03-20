import {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const signMassive = ['+', '-', '*', '/'];
const task1 = () => {
  const [fisrstCount, setFisrstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const [sign, setSign] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <View style={{margin: 15}}>
        <TouchableOpacity
          onPress={() => {
            setFisrstCount(fisrstCount + 1);
          }}
          style={{
            marginTop: 10,
            borderRadius: 10,
            height: 40,
            backgroundColor: '#2C98F0',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '800',
              textAlign: 'center',
            }}>
            {fisrstCount}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSign((sign + 1) % signMassive.length);
          }}
          style={{
            marginTop: 10,
            borderRadius: 10,
            height: 40,
            backgroundColor: '#2C98F0',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '800',
              textAlign: 'center',
            }}>
            {signMassive[sign]}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSecondCount(secondCount + 1);
          }}
          style={{
            marginTop: 10,
            borderRadius: 10,
            height: 40,
            backgroundColor: '#2C98F0',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '800',
              textAlign: 'center',
            }}>
            {secondCount}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (signMassive[sign] === '+') {
              setResult(fisrstCount + secondCount);
            }
            if (signMassive[sign] === '*') {
              setResult(fisrstCount * secondCount);
            }
            if (signMassive[sign] === '-') {
              setResult(fisrstCount - secondCount);
            }
            if (signMassive[sign] === '/') {
              setResult(fisrstCount / secondCount);
            }
          }}
          style={{
            marginTop: 10,
            borderRadius: 10,
            height: 40,
            backgroundColor: '#2C98F0',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '800',
              textAlign: 'center',
            }}>
            {result}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default task1;
