import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children, carAvailable }) => {
  const { buttonStyle, activeTextStyle, buttonDisabled } = styles;

  const notAtDealership = carAvailable !== "In Dealership";
  const btnTextClass = notAtDealership ? buttonDisabled : activeTextStyle;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={btnTextClass}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  activeTextStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 5
  },
  buttonDisabled: {
    display: 'none'
  },
  buttonStyle: {
    alignSelf: "center"
  }
};

export default Button;
