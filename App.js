import React from "react";
import { SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
export default function App() {
  return (
    // <HomeScreen />
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <NewPostScreen />
    </SafeAreaView>
  )

}
