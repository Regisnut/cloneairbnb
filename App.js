import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import AuthLoadingScreen from "./src/containers/AuthLoadingScreen";
import SignInScreen from "./src/containers/SignInScreen";
import HomeScreen from "./src/containers/HomeScreen";
import OtherScreen from "./src/containers/OtherScreen";
import RoomScreen from "./src/containers/RoomScreen";
import TabNavigator from "./src/containers/TabNavigator";

import React from "react";
import { SafeAreaView, Text, StatusBar } from "react-native";

StatusBar.setBarStyle("light-content");

const AppStack = createStackNavigator({
  Tab: TabNavigator,
  Home: HomeScreen,
  Other: OtherScreen,
  Room: RoomScreen
});
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
