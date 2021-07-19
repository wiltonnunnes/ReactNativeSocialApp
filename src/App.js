import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screen/Login';
import Main from './Screen/Main';
import Signup from './Screen/Signup';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Stack.Screen 
        name="Main" 
        component={Main}
      />
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="Login" 
        component={Login}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;