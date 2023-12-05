import Navbar from "./components/Navbar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen";
import About from "./components/About";


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      {/* <Navbar /> */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#8850aa",
          },
          headerTintColor: "#fff"
        }} />
        <Stack.Screen name="About" component={About} options={{
          title: "About",
          headerStyle: {
            backgroundColor: "#8850aa",
          },
          headerTintColor: "#fff"
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
