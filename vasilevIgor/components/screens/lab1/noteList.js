import React from 'react';
import NoteItem from './noteItem';
import {StyleSheet, ScrollView, Dimensions} from "react-native";

const screenWidth = Dimensions.get("window").width;

const NoteList = ({notes}) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            {notes.map(item => <NoteItem key={item.id} {...item} />)}
        </ScrollView>
    )
}

export default NoteList;

const styles = StyleSheet.create({
    scrollView: {
        width: screenWidth,
        alignItems: "center",
      }
});