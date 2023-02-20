import {
  SafeAreaView, View, StyleSheet, Text,
} from 'react-native';
import Constants from 'expo-constants';

function Lab1() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.mainContainer}>

        <Text>
          LALALA
        </Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#787878',
    paddingTop: Constants.statusBarHeight,
  },
});

export default Lab1;
