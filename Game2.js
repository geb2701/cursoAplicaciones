import {StyleSheet, View, Text} from 'react-native';
import Header1 from "./components/Header1";


export default function App() {

  return (
    <View style={styles.container}>
      <Header1 titule={"Game 2"}/>
      <Text>Pag 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});