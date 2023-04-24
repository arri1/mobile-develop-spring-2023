import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import store from './Redux'
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseMemo from './UseMemo';
import ScreenRedux from './ScreenRedux';
import GraphQL from './GraphQL';

import Bus from './assets/svg/bus';
import Basketball from './assets/svg/basketball';
import Credit from './assets/svg/credit';
import Iphone from './assets/svg/iphone';
import Car from './assets/svg/car';

const Tab = createBottomTabNavigator();
// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
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
                                : (route.name == 'GraphQL') ?
                                <Car/>
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
                    <Tab.Screen name='GraphQL'
                        children={() => <GraphQL/>}
                    />
                </Tab.Navigator> 
            </NavigationContainer>
        </SafeAreaView>
      </Provider>
    </ApolloProvider>
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
