import React from "react";
import Container from "../components/Container";
import CodeInput from "../components/CodeInput";

const ConfirmationCode = () => {
  return (
    <Container>
      <CodeInput 
        codeInputStyle={{ borderWidth: 1.5 }} 
        size={50}
      />
    </Container>
  );
};

export default ConfirmationCode;