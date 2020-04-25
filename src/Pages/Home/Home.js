import React, { Component } from "react";

import { View, Text } from "react-native";

import { Container, Button, ButtonText } from "./styles";

export default function Second({ navigation }) {
  return (
    <Container>
      <Button onPress={() => navigation.navigate("Second")}>
        <ButtonText>Go to Second page</ButtonText>
      </Button>
    </Container>
  );
}
