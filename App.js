import {StyleSheet, View} from 'react-native';
import { useState } from 'react';
import StartGame from "./Screens/StartGame";
import Header1 from "./components/Header1";
import GameScreen from "./Screens/GameScreen";
import { useFonts } from "expo-font";


export default function App() {
  const [loaded] = useFonts({
    RubikBubbles: require('./assets/fonts/RubikBubbles-Regular.ttf'),
  })

  const [userNumber, setUserNumber] = useState();

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGame onStartGame={handleStartGame} />;


  if (userNumber) {
    content = <GameScreen />;
  }

  if(!loaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Header1 titule={"Game 1"}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});