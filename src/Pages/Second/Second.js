import React, { Component } from "react";

import { Container, Button, ButtonText } from "./styles";

export default function Second({ navigation }) {
  return (
    <Container>
      <Button onPress={() => navigation.goBack()}>
        <ButtonText>Back to Home page</ButtonText>
      </Button>
    </Container>
  );
}
