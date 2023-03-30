import React, {useCallback} from "react";
import { View, Text, Button } from "react-native";

import UserList from "./components/UserList";

const MainContainer = () => {

  return (
    <View style={{flex : 1, backgroundColor : "#f5f5f5", paddingTop : 20}}>
      <UserList />
    </View>
    )
}

export default MainContainer;