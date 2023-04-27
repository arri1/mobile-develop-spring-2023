import React, { useCallback, useEffect } from "react";
import { View, Text, Button } from "react-native";

const User = ({name}) => {
  return (
    <View>
      <Text style={{color : "blue"}}>{name}</Text>
    </View>
  )
}

export default User;