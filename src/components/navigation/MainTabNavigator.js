import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../TabBar/TabBarIcon.js";
import HomeScreen from "../screens/HomeScreen.js";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Fancy Cars",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-car` : "md-information-circle"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack
});
