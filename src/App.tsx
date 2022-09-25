import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './Screen/SignIn';
import Main from './Screen/Main';
import SignUp from './Screen/SignUp';
import SignupContext from './Context/signup';
import ForgotPassword from './Screen/ForgotPassword';
import ConfirmationCode from './Screen/ConfirmationCode';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
              backgroundColor: 'white'
            },
            headerBackImage: ({ tintColor }) => <Icon name="chevron-left" size={30} color={tintColor} />,
            headerTitleAlign: 'center'
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
            name='ConfirmationCode'
            component={ConfirmationCode}
            options={{
              title: 'Código de Verificação'
            }}
          />
          <Stack.Screen 
            name="SignIn" 
            component={SignIn}
            options={{
              title: 'Iniciar sessão'
            }}
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