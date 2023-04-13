import React, {useState, useMemo, useEffect, useCallback,} from 'react';
import {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  FlatList,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import plussquare from 'samoylovAnatoliy/assets/plussquare.png';

const Lab3 = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const num = 0;

  const hardFunc = () => {
    for (i = 0; i <= 10000000; i++) {}
    return 1;
  };

  const memoFunc = useMemo(() => hardFunc(num), [num]);

  return (
    <SafeAreaView style={styles.mainWindow}>
      <View style={styles.container}>
        <View style={styles.buttonStyle}>
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text}>{value1}</Text>
              <AntDesign
                name="reload1"
                style={{color: 'black', fontSize: 30, margin: 5}}
                onPress={() => setValue1(0)}
              />
            </View>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => setValue1(value1 + hardFunc())}>
              <Image source={plussquare}/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonStyle}>
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text}>{value2}</Text>
              <AntDesign
                name="reload1"
                style={{color: 'black', fontSize: 30, margin: 5}}
                onPress={() => setValue2(0)}
              />
            </View>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => setValue2(value2 + memoFunc)}>
              <Image source={plussquare}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    mainWindow: {
        backgroundColor: '#AFC9C5',
        flex: 1,
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#88A19A',
        marginTop: '30%',
    },
    text: {
        color: '#494D4D',
        fontSize: 48,
        fontFamily: 'AlumniSans-Regular',
    },
    buttonStyle: {
        margin: 15,
        width: 115,
    },
    input: {
        fontSize: 16,
        borderBottomWidth: 2,
        borderColor: 'black',
        width: 150,
    },
});

export default Lab3;
