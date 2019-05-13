import { types, selectOptions, displayCars } from './constants';
import createReducer from "../../utils/createReducer";

const Immutable = require("seamless-immutable").static;

const initialState = Immutable.from({
    cars: [],
    isLoading: false,
    errValue: '',
    error: false,
    hasMore: true,
    startIndex: 0,
    perRequest: 10,
    endIndex: 10,
    optionSelected: ''
});

const loadCarsData = (state, { carsData }) => {
  const sIndex = state.endIndex;
  const eIndex = state.endIndex + state.perRequest;
  if ([...state.cars].length > displayCars) {
    return Immutable.merge(state, {hasMore: false, isLoading: false});
  }
  return Immutable.merge (state, {cars: [...state.cars ,...carsData], startIndex: sIndex, endIndex: eIndex, isLoading: false});;
}

const doSortCars = (state, { option }) => {
  if (option === selectOptions[0]) {
    return Immutable.merge (state, {optionSelected: option, isLoading: false});
  }
  const sortedCars = [...state.cars].sort((a, b) => {
    return (a[option] > b[option]) ? 1 : -1;
  });
  return Immutable.merge (state, {cars: sortedCars, optionSelected: option, isLoading: false});
}

const displayLoader = (state) => {
  return Immutable.merge (state, {isLoading: true});
}


const handlers = {
  [types.LOAD_CARS_DATA]: loadCarsData,
  [types.SORT_CARS]: doSortCars,
  [types.DISPLAY_LOADER]: displayLoader
}

export default createReducer(initialState, handlers);


