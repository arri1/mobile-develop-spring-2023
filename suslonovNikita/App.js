import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import UseState from './UseState';
import UseEffect from './UseEffect';
import Bus from './assets/svg/bus';
import Basketball from './assets/svg/basketball';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
            <Tab.Navigator initialRouteName='Main'
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color}) => {
                      return ( 
                        <View>
                          {
                            route.name == 'UseState' ?
                            <Basketball/>
                            : (route.name == 'UseEffect') ?
                            <Bus/>
                            : null
                          }
                        </View>
                      )
                    },
                })}
            >
                <Tab.Screen name='UseState'
                    children={() => <UseState/>}
                />
                <Tab.Screen name='UseEffect'
                    children={() => <UseEffect/>}
                />
            </Tab.Navigator> 
        </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
