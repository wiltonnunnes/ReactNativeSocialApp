import React from 'react';
import Button from '../Component/Button';
import Container from '../Component/Container';

const Main = ({ navigation }) => {
  return (
    <Container>
      <Button 
        title="Registre-se" 
        onPress={() => navigation.navigate('Signup')}
      />
      <Button 
        title="Entrar" 
        onPress={() => navigation.navigate('Login')}
      />
    </Container>
  );
};

export default Main;