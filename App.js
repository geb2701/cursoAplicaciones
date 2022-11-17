import {StyleSheet, View} from 'react-native';
import { useState } from 'react';
import StartGame from "./Screens/StartGame";
import Header1 from "./components/Header1";

export default function App() {
  const [userNumber, setUserNumber] = useState ()

  const handleStartGame = ()=>{
    setUserNumber(selctedNumber)
  }

  let content= <StartGame onGameStart={selctedNumber}/>

  if(userNumber){
    content =<GameStart/>
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