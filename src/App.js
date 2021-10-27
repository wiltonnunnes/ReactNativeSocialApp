import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screen/Login';
import Main from './Screen/Main';
import Signup1 from './Screen/Signup1';
import SignupContext from './Context/signup';
import ForgotPassword from './Screen/ForgotPassword';

const Stack = createStackNavigator();

const App = () => {
  const [login, setLogin] = useState('');
  return (
    <NavigationContainer>
      <SignupContext.Provider 
        value={{ 
          login,
          setLogin 
        }}
      >
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
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="Signup1" 
            component={Signup1} 
            options={{
              headerLeftContainerStyle: { paddingLeft: '10.185185185%' }
            }}
          />
          <Stack.Screen 
            name="Login" 
            component={Login}
          />
          <Stack.Screen 
            name="ForgotPassword" 
            component={ForgotPassword}
          />
        </Stack.Navigator>
      </SignupContext.Provider>
    </NavigationContainer>
  );
};

export default App;