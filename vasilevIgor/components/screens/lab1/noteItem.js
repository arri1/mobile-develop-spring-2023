import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CheckBox from "@react-native-community/checkbox";

const NoteItem = ({ name, id, relevant }) => {
  const [checked, setChecked] = useState(relevant);
  const [isSelected, setSelection] = useState(false);
  const classs = ["note"];

  if (checked) {
    classs.push("not relevant");
  }

  return (
    <View style={styles.container} className={classs.join(" ")}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={checked}
          onChange={() => setChecked(!checked)}
          style={styles.checkbox}
        />
      </View>
      <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>
    </View>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
