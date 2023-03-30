import React, { useState } from "react";
import NoteList from './noteList';
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
