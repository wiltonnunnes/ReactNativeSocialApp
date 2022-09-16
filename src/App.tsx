import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screen/SignIn';
import Main from './Screen/Main';
import SignUp from './Screen/SignUp';
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
            name="SignUp" 
            component={SignUp} 
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