import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Second } from "../src/Pages/index";

const Stack = createStackNavigator();

const NavigationApp = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Second" component={Second} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default NavigationApp;
