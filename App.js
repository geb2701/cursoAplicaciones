
import { useFonts } from "expo-font";
import ButtomTabNavigator from "./scr/navigation/ButtomTabNavigator";
import { Provider } from "react-redux";
import store from "./scr/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    Tillana: require("./assets/fonts/RubikBubbles-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ButtomTabNavigator />
    </Provider>
  );
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
