import React from "react";
import { SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
import SignedInStack from "./navigation";
import 'react-native-gesture-handler';
export default function App() {
  return <SignedInStack />


}
