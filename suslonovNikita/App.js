import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux'
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseMemo from './UseMemo';
import ScreenRedux from './ScreenRedux';
import Bus from './assets/svg/bus';
import Basketball from './assets/svg/basketball';
import Credit from './assets/svg/credit';
import Iphone from './assets/svg/iphone';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
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
                              : (route.name == 'ScreenRedux') ?
                              <Iphone/>
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
                  <Tab.Screen name='ScreenRedux'
                      children={() => <ScreenRedux/>}
                  />
              </Tab.Navigator> 
          </NavigationContainer>
      </SafeAreaView>
    </Provider>
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
