import React from "react";
import { View } from "react-native";

import CarList from "../CarList/container";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <CarList />
      </View>
    );
  }
}
