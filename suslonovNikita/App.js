import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseMemo from './UseMemo';
import Bus from './assets/svg/bus';
import Basketball from './assets/svg/basketball';
import Credit from './assets/svg/credit';

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
                            : (route.name == 'UseMemo') ?
                            <Credit/>
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
                <Tab.Screen name='UseMemo'
                    children={() => <UseMemo/>}
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
