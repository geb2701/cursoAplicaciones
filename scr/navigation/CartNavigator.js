import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import COLORS  from "../constants/colors";
import CartScreen from "../Screens/CartScreen";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.backgroundColorContainer },
        headerTintColor: COLORS.backgroundColorHeader,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: "Carrito" }}
      />
    </Stack.Navigator>
  );
};