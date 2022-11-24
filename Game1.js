import {StyleSheet, View} from 'react-native';
import { useState } from 'react';
import StartGame from "./Screens/StartGame";
import Header1 from "./components/Header1";
import GameScreen from "./Screens/GameScreen";
import { useFonts } from "expo-font";
import FinishGame from "./Screens/FinishGame";


export default function App() {
  const [loaded] = useFonts({
    RubikBubbles: require("./assets/fonts/RubikBubbles-Regular.ttf"),
  });

  const [userNumber, setUserNumber] = useState();
  const [winOrLose, setWinOrLose] = useState(false);
  const [result, setResult] = useState("");

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const handleFinishGame = (selection, number) => {
    if (
      (selection === "lower" && userNumber < number) ||
      (selection === "greater" && userNumber > number)
    ) {
      setResult("Win");
    } else {
      setResult("Lose");
    }
    setWinOrLose(true);
  };

  let content = <StartGame onStartGame={handleStartGame} />;

  if (userNumber && winOrLose === true) {
    content = <FinishGame result={result}/>
  } else if (userNumber){
    content = <GameScreen handleResult={handleFinishGame}/>;
  }

  if (!loaded) {
    return null;
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