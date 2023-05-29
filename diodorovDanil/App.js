import { StyleSheet } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { COLORS } from './config'
import Task1 from './pages/Task1'
import Icon1 from 'react-native-vector-icons/AntDesign'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Task2 from './pages/Task2'
import Task3 from './pages/Task3'
import { Provider } from 'react-redux'
import { store } from './store'
import Task4 from './pages/Task4'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const Tab = createBottomTabNavigator()

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
})

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: COLORS.PRIMARY,
    },
}

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <NavigationContainer theme={MyTheme}>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused }) => {
                                let icon
                                let color = focused ? 'white' : COLORS.BLUE
                                if (route.name === 'Task1') {
                                    icon = (
                                        <Icon1
                                            name="filetext1"
                                            size={30}
                                            color={color}
                                        />
                                    )
                                } else if (route.name === 'Task2') {
                                    icon = (
                                        <Icon1
                                            name="filetext1"
                                            size={30}
                                            color={color}
                                        />
                                    )
                                } else if (route.name === 'Task3') {
                                    icon = (
                                        <Icon1
                                            name="filetext1"
                                            size={30}
                                            color={color}
                                        />
                                    )
                                } else if (route.name === 'Task4') {
                                    icon = (
                                        <Icon1
                                            name="filetext1"
                                            size={30}
                                            color={color}
                                        />
                                    )
                                }
                                return icon
                            },
                            tabBarActiveTintColor: 'tomato',
                            tabBarInactiveTintColor: 'gray',
                            tabBarLabel: () => {
                                return null
                            },
                            tabBarStyle: {
                                backgroundColor: COLORS.SECONDARY,
                                height: 90,
                                borderTopWidth: 0,
                            },
                        })}
                    >
                        <Tab.Screen
                            name="Task1"
                            component={Task1}
                            options={{ headerShown: false }}
                        />
                        <Tab.Screen
                            name="Task2"
                            component={Task2}
                            options={{ headerShown: false }}
                        />
                        <Tab.Screen
                            name="Task3"
                            component={Task3}
                            options={{ headerShown: false }}
                        />
                        <Tab.Screen
                            name="Task4"
                            component={Task4}
                            options={{ headerShown: false }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </Provider>
        </ApolloProvider>
    )
}

const styles = StyleSheet.create({})

export default App
