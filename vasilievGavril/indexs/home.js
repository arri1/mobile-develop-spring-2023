import * as React from 'react';
import { 
    Modal,
    StyleSheet, 
    Button,
    Text, 
    Pressable,
    SafeAreaView,
    View, 
    Image,
    Alert,
  } from 'react-native';
  
  const Separator = () => <View style={styles.separator} />
  
const Home = (props) => {

    const [count, setCount] = React.useState(0);

    const onClick = () => {
      setCount(count + 1);
    }
    return(
      <SafeAreaView style={styles.container}>
  
        <Text style={styles.welcome}>
          Это кошка?
          </Text>
        <Image style={styles.image_cat} source={require('../assets/cat.png')} 
        />
  
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
  
      <Separator />
  
      <Text style={styles.welcome}>
        Вы кликнули {count} раз
      </Text>
      <Button
        title="Кликать"
        onPress={onClick}
  
      />
  
    
      
    </SafeAreaView>
    
    );
  }
  
  
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
  export default Home