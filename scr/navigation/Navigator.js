import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Game1 from "../Screens/Game1";
import Game2 from "../Screens/Game2";
import SelectGame from "../Screens/SelectGame";
import IdeaShow from "../Screens/IdeaShow";
import Details from "../Screens/Details";

const Stack = createNativeStackNavigator();

export default Navigator = () => {
  /*return (
      <Stack.Navigator
        initialRouteName="Categories"
      >
       <Stack.Screen
          name="Categories"
          component={SelectGame}
          options={{
            title: "Select Game",
          }}
        />

        <Stack.Screen
          name="Juego1"
          component={Game1}
        />

        <Stack.Screen 
          name="Juego2" 
          component={Game2} 
        />

        <Stack.Screen 
          name="Idea" 
          component={IdeaShow}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />

        <Stack.Screen 
          name="IdeaDescription" 
          component={IdeaShow}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
  );>*/
  return (
    <Stack.Navigator
      initialRouteName="Categories"
    >
      <Stack.Screen 
          name="Juego2" 
          component={Game2} 
        />
      <Stack.Screen 
        name="Idea" 
        component={IdeaShow}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />

      <Stack.Screen 
        name="Details" 
        component={Details}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
)
}