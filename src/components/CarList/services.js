import carsJsonData from '../../mocks/cars.json';

export const fetchCarsData = async (startIndex, endIndex) => {
  try {
    if (carsJsonData.length > 0) {
      return carsJsonData.slice(startIndex,endIndex);
    }
  } catch (error) {
    return error;
  }
}