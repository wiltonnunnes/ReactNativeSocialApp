import React from 'react';
import Button from '../components/Button';
import Container from '../components/Container';
import { Link } from '@react-navigation/native';
import { useWindowDimensions, Image } from 'react-native';
import AppText from '../components/AppText';

const Main = ({ navigation }) => {
  const windowHeight = useWindowDimensions().height;
  return (
    <Container>
      <Image 
        source={require('../../assets/images/icon-48.png')}
      />
      <AppText style={{ marginBottom: windowHeight * 0.044017094 }}>
        See what's happening in the world right now.
      </AppText>
      <Button 
        title="Create account" 
        onPress={() => navigation.navigate('SignUp')} 
        style={{ marginBottom: windowHeight * 0.33974359 }}
      />
      <AppText>
        {"Have an account already? "}
        <Link 
          to="/Login" 
          style={{ color: 'blue' }}
        >
          Log in
        </Link>
      </AppText>
    </Container>
  );
};

export default Main;