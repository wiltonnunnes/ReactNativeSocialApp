import React, { useState } from 'react';
import SignupContext from '../../Context/signup';
import { createStackNavigator } from '@react-navigation/stack';
import step1 from './step1';
import step2 from './step2';

const Stack = createStackNavigator();

const Signup = () => {
  const [login, setLogin] = useState('');

  return (
    <SignupContext.Provider 
      value={{ 
        login,
        setLogin 
      }}
    >
      <Stack.Navigator>
        <Stack.Screen 
          name="step1" 
          component={step1}
        />
        <Stack.Screen 
          name="step2" 
          component={step2}
        />
      </Stack.Navigator>
    </SignupContext.Provider>
  );
};

export default Signup;