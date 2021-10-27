import React, { useState } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import Button from '../Component/Button';
import Input from '../Component/Input';
import IconButton from '../Component/IconButton';
import Container from '../Component/Container';
import { Link } from '@react-navigation/native';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const windowHeight = useWindowDimensions().height;

  return (
    <Container>
      <Input 
        label="Email ou número de telefone" 
        value={email} 
        onChangeText={setEmail} 
        style={{ marginBottom: windowHeight * 0.035470085 }}
      />
      <Input 
        secureTextEntry={!showPassword} 
        label="Password" 
        value={password} 
        onChangeText={setPassword} 
        right={
          <IconButton 
            icon={showPassword ? "eye" : "eye-off"} 
            size={30} 
            onPress={() => setShowPassword(!showPassword)} 
            style={{
              backgroundColor: '#ffff00'
            }}
          />
        } 
        style={[styles.input, { marginBottom: windowHeight * 0.061111111 }]}
      />
      <Button 
        onPress={() => {}} 
        title="Login" 
        style={{ marginBottom: windowHeight * 0.088034188 }}
      />
      <Link 
        to="/ForgotPassword" 
        style={{ color: 'blue' }}
      >
        Forget password
      </Link>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    backgroundColor: '#ffffff'
  },
  input: {
    
  }
});

export default SignIn;