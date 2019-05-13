import React from 'react';
import { Text, View } from 'react-native';
import Button from '../generic/Button';
export default function CarDetails({ carProps }) {

  return (
    <>
      <View>
        <View>
          <Text> Name: {carProps.name}</Text>
          <Text> Model: {carProps.model}</Text>
          <Text> Year: {carProps.year}</Text>
          <Text>{` (${carProps.available})`}</Text>
        </View>
        <View>
          <Button carAvailable={carProps.available}>Buy Car</Button>
        </View>
      </View>
    </>
  )
}
