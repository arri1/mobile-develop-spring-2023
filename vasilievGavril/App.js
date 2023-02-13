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

const App = () => {

  const [count, setCount] = React.useState(0);
  const [open, setOpen] = React.useState(false);


  const onClick = () => {
    setCount(count + 1);
  }
  return(
    <SafeAreaView style={styles.container}>

      <Text style={styles.welcome}>
        Это кошка?
        </Text>
      <Image style={styles.image_cat} source={require('./assets/cat.png')} 
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

    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => {
          Alert.alert('Гифка была закрыта');
          setOpen(!open);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={styles.modalText} source={require('./assets/hungry.gif')}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setOpen(!open)}>
              <Text style={styles.textStyle}>Закрыть гифку</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setOpen(true)}>
        <Text style={styles.textStyle}>Показать гифку</Text>
      </Pressable>
    </View>
    
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
  centeredView: {

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    margin:25,
    textAlign: 'center',
  }
});
export default App