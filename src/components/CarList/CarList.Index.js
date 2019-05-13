import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Picker,
  ActivityIndicator
} from "react-native";
import CarCard from "../CarCard/CarCard.Index";

import { selectOptions } from "./constants";

export default class CarList extends React.Component {
  componentDidMount() {
    this.loadCars();
  }

  loadCars = () => {
    const { error, isLoading, hasMore, startIndex, endIndex } = this.props;
    if (error || isLoading || !hasMore) return;
    this.props.onGetCarsDetail(startIndex, endIndex);
  };

  renderOptions = options => {
    if (options.length > 0) {
      return options.map((val, index) => {
        return <Picker.Item key={index} label={val} value={val} />;
      });
    }
  };

  displayMsg = hasMore => {
    if (!hasMore) {
      return (
        <View>
          <Text style={styles.containerHeaderTextSelect}>no more data....</Text>
        </View>
      );
    } else {
      return null;
    }
  };

  onScrollEvent = nativeEvent => {
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;

    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - 40) {
      this.loadCars();
    }
  };

  renderContainerMain = () => {
    if (this.props.isLoading) {
      return <ActivityIndicator size="large" color="red" />;
    } else {
      const cars = this.props.cars;
      if (cars && cars.length > 0) {
        return cars.map(car => {
          return <CarCard {...{ car }} key={car.id} />;
        });
      } else {
        return <Text>unavailable car data....</Text>;
      }
    }
  };

  render() {
    return (
      <ScrollView
        scrollEventThrottle={16}
        onScroll={({ nativeEvent }) => this.onScrollEvent(nativeEvent)}
      >
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <View style={styles.containerHeaderPicker}>
              <Picker
                onValueChange={(itemValue, itemIndex) =>
                  this.props.onSortCars(itemValue)
                }
                style={{ height: 150, width: 300 }}
                selectedValue={this.props.optionSelected}
              >
                {this.renderOptions(selectOptions)}
              </Picker>
            </View>
          </View>
          <View style={styles.containerMain}>{this.renderContainerMain()}</View>
          {this.displayMsg(this.props.hasMore)}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  containerMain: {
    backgroundColor: "#E1F5FE",
    paddingLeft: 10,
    paddingRight: 10
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#64B8EE"
  },
  containerHeaderPicker: {
    justifyContent: "center"
  },
  containerHeaderTextSelect: {
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "600"
  }
});
