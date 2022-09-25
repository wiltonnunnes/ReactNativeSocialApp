import React, { useState } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import Button from '../components/Button';
import FloatingLabelInput from '../components/FloatingLabelInput';
import IconButton from '../components/IconButton';
import Container from '../components/Container';
import { Link } from '@react-navigation/native';
import { useTogglePasswordVisibility } from '../hooks/useTogglePasswordVisibility';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const windowHeight = useWindowDimensions().height;
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

  return (
    <Container>
      <FloatingLabelInput 
        label="Email ou número de telefone" 
        value={email} 
        onChangeText={setEmail} 
        style={{ marginBottom: windowHeight * 0.035470085 }}
      />
      <FloatingLabelInput 
        secureTextEntry={!passwordVisibility} 
        label="Senha" 
        value={password} 
        onChangeText={setPassword} 
        right={
          <IconButton 
            iconName={rightIcon} 
            onPress={handlePasswordVisibility} 
          />
        } 
        style={[styles.input, { marginBottom: 5 }]}
      />
      <Link 
        to="/ForgotPassword" 
        style={{ 
          color: 'blue', 
          marginBottom: windowHeight * 0.061111111,
          alignSelf: 'flex-end'
        }}
      >
        Esqueci a senha
      </Link>
      <Button 
        onPress={() => {}} 
        title="Iniciar sessão" 
        buttonStyle={{ 
          marginBottom: windowHeight * 0.088034188, 
          borderRadius: 30
        }}
        disabled={email.length == 0}
      />
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