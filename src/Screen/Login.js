import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../Component/Button';
import Input from '../Component/Input';
import IconButton from '../Component/IconButton';
import Container from '../Component/Container';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <Input 
        label="Email" 
        value={email} 
        onChangeText={setEmail} 
        style={styles.input}
      />
      <Input 
        secureTextEntry={!showPassword} 
        label="Password" 
        value={password} 
        onChangeText={setPassword} 
        right={
          <IconButton 
            icon={showPassword ? "eye" : "eye-off"} 
            size={36} 
            onPress={() => setShowPassword(!showPassword)}
          />
        } 
        style={styles.input}
      />
      <Button 
        onPress={() => {}} 
        title="Entrar"
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%'
  },
  input: {
    marginBottom: 20
  }
});

export default SignIn;