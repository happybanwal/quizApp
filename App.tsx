import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import { PaperProvider } from "react-native-paper";
import QuizScreen2 from "./src/screens/QuizScreen2";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
       
          <Stack.Screen name="QuizScreen2" component={QuizScreen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
