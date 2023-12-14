import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/navigation/Home';
import FlatListComponent from './src/flatListComponent/FlatListComponent';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './src/navigation/tabNavigation/Welcome';
import Menu from './src/navigation/tabNavigation/Menu';
import Icon from 'react-native-vector-icons/Feather';
import LoginIcon from 'react-native-vector-icons/MaterialIcons'
import Login from './src/navigation/tabNavigation/Login';

const App = () => {

      const Stack = createNativeStackNavigator();
      const Tab = createBottomTabNavigator()
      return (
            <NavigationContainer>
                  {/* <Stack.Navigator>
                  <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen name="Details" component={FlatListComponent} />
            </Stack.Navigator> */}

                  <Tab.Navigator
                        screenOptions={({ route }) => ({
                              tabBarIcon: ({ focused, color, size }) => {
                                    let iconName;
                                    if (route.name === "Welcome") {
                                          iconName = focused ? "home" :
                                                "home";
                                    } else if (route.name === "Menu") {
                                          iconName = "menu";
                                    }
                                    else if (route.name === "Login") {
                                          iconName = "login";
                                          return <LoginIcon name={iconName} size={30} color="green" />
                                    }
                                    return <Icon name={iconName} size={30} color="green" />
                              },
                              tabBarActiveTintColor: "tomato",
                              tabBarActiveBackgroundColor: "#FFE6F7"
                        })}
                  >
                        <Tab.Screen name="Welcome" component={Welcome}/>
                        <Tab.Screen name="Menu" component={Menu} />
                        <Tab.Screen name="Login" component={Login} />
                  </Tab.Navigator>

            </NavigationContainer>
      )
}
export default App;
