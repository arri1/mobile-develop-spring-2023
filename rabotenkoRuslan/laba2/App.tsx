import React from 'react';
import {StyleSheet, Button, View, SafeAreaView, Text, Alert, BackHandler} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const AppButtons = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Simple Button
      </Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Button with adjusted color for every devices.
      </Text>
      <Button
        title="Press me"
        color="#d11c0f"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        All interaction for the component are disabled.
      </Text>
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        text anchored in the middle of the page.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert("Left Button Pressed")}
        />
        <Button
          title="Exit"
          onPress={() => BackHandler.exitApp()}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'left',
    marginVertical: 8,
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

export default AppButtons;