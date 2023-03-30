import React, { useState } from "react";
import NoteList from './NoteList';
import {StyleSheet, View, TextInput} from "react-native";
//import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

//const colors = ["red", "white", "blue", "black"];

const App = () => {
  const [notes, setNotes] = useState([
    {id: 1, title: 'First note', relevant: true},
    {id: 2, title: 'Second note', relevant: true},
  ]);
  const [noteName, setNoteName] = useState(' ');
  const addNote = event => {
    if (event.key === 'Enter') {
      setNotes([
        ...notes,
        {
          id: Date.now(),
          name: noteName,
          relevant: true
        }
      ])
      setNoteName(0)
    }
  }

  return (
    
    // <SafeAreaView
    //   style={{
    //     backgroundColor: colors[backgroundColorIndex],
    //     flex: 1,
    //     justifyContent: "center",
    //   }}
    // >
    //   <View style={{ margin: 15 }}>
    //     <View style={{ alignItems: "center" }}>
    //       <Text style={{ color: "white", fontSize: 20, fontWeight: "800" }}>
    //         {count}
    //       </Text>
    //     </View>
    //     <TouchableOpacity
    //       onPress={() => {
    //         setCount(count + 1);
    //       }}
    //       style={{
    //         marginTop: 10,
    //         borderRadius: 10,
    //         height: 40,
    //         backgroundColor: colors[(backgroundColorIndex + 1) % colors.length],
    //       }}
    //     />
    //     <TouchableOpacity
    //       onPress={() => {
    //         setBackgroundColorIndex((backgroundColorIndex + 1) % colors.length);
    //       }}
    //       style={{
    //         marginTop: 10,
    //         borderRadius: 10,
    //         height: 40,
    //         backgroundColor: colors[(backgroundColorIndex + 1) % colors.length],
    //       }}
    //     />
    //   </View>
    // </SafeAreaView>
    // This code was made during the class, we will not use it
    <View style={styles.container}>

      <View style={styles.form}>
        <TextInput 
        style={styles.input}
        value={noteName}
        onChange={event => setNoteName(event.target,value)}
        onKeyDown={addNote}
        placeholder="New note"
        />
        </View>

    <NoteList notes={notes} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f3f7",
  },
  input: {
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    borderColor: "black",
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "silver",
    borderColor: "#838FFF",
  },
  form: {
    flex: 1,
    alignItems: "center",
    marginBottom: 40,
  },
});
