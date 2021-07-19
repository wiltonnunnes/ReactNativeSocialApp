import React, { useContext } from 'react';
import SignupContext from '../../Context/signup';
import { Text } from 'react-native';
import Container from '../../Component/Container';

const step2 = () => {
  const { login } = useContext(SignupContext);

  return (
    <Container>
      <Text>{login}</Text>
    </Container>
  );
};

export default step2;