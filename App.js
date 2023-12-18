import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTabNavigator from './src/navigation/MainTabNavigator';
import AccountDetails from './src/mainApp/accounts/accountDetails/AccountDetails';
import SearchAccounts from './src/mainApp/searchAccounts/SearchAccounts';
import MyReceipt from './src/mainApp/receipt/MyReceipt';
import MyTasks from './src/mainApp/myTasks/MyTasks';
import Components from './src/mainApp/components/Components';


const App = () => {
      const Stack = createNativeStackNavigator();
      return (
            <NavigationContainer>
              <Stack.Navigator initialRouteName="MainTabs">
                <Stack.Screen
                  name="MainTabs"
                  component={MainTabNavigator}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="myAccount" component={AccountDetails} />
                <Stack.Screen name="components" component={Components} />
                <Stack.Screen name="myTask" component={MyTasks} />
                <Stack.Screen name="myReceipt" component={MyReceipt} />
                <Stack.Screen name="searchAccounts" component={SearchAccounts} />
              </Stack.Navigator>
            </NavigationContainer>
          );
}
export default App;
