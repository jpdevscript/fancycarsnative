import React from 'react';
import CarImage from './CarImage';
import CarDetails from './CarDetails';
import Card from '../generic/Card';
import CardSection from '../generic/CardSection';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


export default function CarCard({ car }) {
  const {img, ...carProps} = car;

  const {
    detailsContentStyle,
    thumbnailContainerStyle,
  } = styles;
  return (
      <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          {<CarImage {...{img}} />}
        </View>
        <View style={detailsContentStyle}>
          <CarDetails {...{carProps}} />
        </View>
      </CardSection>
    </Card>
  )
}

const styles = {
  detailsContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  headerTextStyle: {

  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};
