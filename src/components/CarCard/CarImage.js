import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { mapImage } from "./ImportCarImage.js";

export default function CarImage({ img }) {
  const {
    thumbnailStyle
  } = styles;
  return (
    <>
      <Image
          style={thumbnailStyle}
          source={mapImage[img]}
      />
    </>
  )
}

const styles = {
  thumbnailStyle: {
    height: 110,
    width: 145,
    borderRadius: 5
  }
};