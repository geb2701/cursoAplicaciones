
import { useFonts } from "expo-font";
import ButtomTabNavigator from "./scr/navigation/ButtomTabNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    Tillana: require("./assets/fonts/RubikBubbles-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <ButtomTabNavigator />;
}

/*
import { useFonts } from "expo-font";
import Navigator from "./scr/navigation/Navigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    Tillana: require("./assets/fonts/RubikBubbles-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Navigator />;
}
*/
