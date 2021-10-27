import React, { useContext } from 'react';
import Button from '../Component/Button';
import Container from '../Component/Container';
import SignupContext from '../Context/signup';
import { View, StyleSheet, useWindowDimensions, Dimensions } from 'react-native';
import Input from '../Component/Input';
import IconButton from '../Component/IconButton';

const screenWidth = Dimensions.get('screen').width;

const Signup1 = ({ navigation }) => {
  const { login, setLogin } = useContext(SignupContext);
  const windowHeight = useWindowDimensions().height;

  return (
    <Container>
      <Input 
        label="Email" 
        value={login} 
        onChangeText={text => setLogin(text)} 
        style={[styles.input, { marginBottom: windowHeight * 0.040598291 }]} 
        right={
          <IconButton 
            icon="close-circle"
          />
        }
      />
      <View 
        style={{ 
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Input 
          label="Código do país" 
          style={{ width: '26.355421687%' }}
        />
        <Input 
          label="Número de telefone" 
          style={{ width: '71.536144578%' }}
        />
      </View>
      <Button 
        title="Próximo" 
        onPress={() => navigation.navigate('step2')}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {}
});

export default Signup1;