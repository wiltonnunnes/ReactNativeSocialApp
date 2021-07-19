import React, { useContext } from 'react';
import Input from '../../Component/Input';
import SwitchSelector from '../../Component/SwitchSelector';
import Button from '../../Component/Button';
import Container from '../../Component/Container';
import SignupContext from '../../Context/signup';

const step1 = ({ navigation }) => {
  const { login, setLogin } = useContext(SignupContext);
  return (
    <Container>
      <SwitchSelector 
        options={[
          {
            label: 'Telefone',
            value: 'telefone'
          },
          {
            label: 'E-mail',
            value: 'email'
          }
        ]}
      />
      <Input 
        label="E-mail" 
        value={login} 
        onChangeText={text => setLogin(text)}
      />
      <Button 
        title="Próximo" 
        onPress={() => navigation.navigate('step2')}
      />
    </Container>
  );
};

export default step1;