import { useFonts } from "expo-font";
import Navigator from "./navigation/Navigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    Tillana: require("./assets/fonts/RubikBubbles-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Navigator />;
}
