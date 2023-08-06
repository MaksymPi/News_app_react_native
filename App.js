import React, { useState } from "react";
import { View, Text } from "react-native";
import AppLoading from "expo-app-loading";


import * as Font from "expo-font";
import { gStyle, qStyle } from "./styles/style";
import MainStack from './navigate'


const fonts = () =>
  Font.loadAsync({
    "ub-bolt": require("./assets/fonts/Ubuntu-Bold.ttf"),
    "ub-light": require("./assets/fonts/Ubuntu-Light.ttf"),
  });

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <MainStack/>
    );
  } else {
    return (
    <AppLoading 
    startAsync={fonts} 
    onFinish={() => setFont(true)} 
    onError={console.warn}
    />
    );
  }
}
