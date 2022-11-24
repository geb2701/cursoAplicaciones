import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Game1 from "../Game1";
import Game2 from "../Game2";
import SelectGame from "../SelectGame";

const Stack = createNativeStackNavigator();

export default Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SelectGame" component={SelectGame} />
        <Stack.Screen name="Juego1" component={Game1} />
        <Stack.Screen name="Juego2" component={Game2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
