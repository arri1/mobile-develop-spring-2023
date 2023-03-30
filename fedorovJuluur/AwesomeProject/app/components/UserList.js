import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import User from "./User";

const loadUsers = async (users, setUsers) => {
  try {
    let result = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
    setUsers(result);
  } catch (err) {
    console.log(err);
  }
}

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers(users, setUsers);
  }, users);

  return (
    <View style={{flex : 1}}>
      <Text>User Count : {users.length}</Text>
      <View style={{padding : 5}}>
        {
          users.map(user => {
            return <User name={user.name} />
          })
        }
      </View>
    </View>
  )
}

export default UserList;