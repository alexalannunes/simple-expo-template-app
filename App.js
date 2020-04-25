import React, { useState, useEffect } from "react";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Asset } from "expo-asset";

import { Container, Center } from "./styles";
import { ActivityIndicator } from "react-native";
import colors from "./constants/colors";
import NavigationApp from "./navigation/navigation";

const fonts = {
  "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
  "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
};

const images = [require("./assets/user/me.jpg")];

const Loading = () => (
  <Center>
    <ActivityIndicator color={colors.primary} size="large" />
  </Center>
);

export default function App() {
  const [isLoadingComplete, setLoadinfComplete] = useState(false);

  useEffect(() => {
    async function LoadResources() {
      try {
        SplashScreen.preventAutoHide();

        await Font.loadAsync(fonts);

        images.map(
          async (image) => await Asset.fromModule(image).downloadAsync()
        );
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadinfComplete(true);
        SplashScreen.hide();
      }
    }

    LoadResources();
  }, []);

  if (!isLoadingComplete) {
    return <Loading />;
  }

  return (
    <Container>
      <NavigationApp />
    </Container>
  );
}
