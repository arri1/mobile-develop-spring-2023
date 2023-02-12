import React from 'react';
import { 
  StyleSheet, 
  Button,
  Text, 
  SafeAreaView,
  View, 
  Image,
  Alert,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.welcome}>
        Это кошка?
        </Text>
      <Image style={styles.image_cat} source={require('./assets/cat.png')} 
      />

    </View>

    <Separator />
    <View style={styles.fixToText}>
    <Button
      title="да"
      onPress={() => Alert.alert('правильно, это кошка)')}
    />
    <Button
      title="нет"
      onPress={() => Alert.alert('неправильно, лох)')}
    />
    </View>
    </SafeAreaView>
    
);


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      
  },
  image_cat:{

    alignItems: 'center',
    width: 160,
    height: 100,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  
});

export default App;
