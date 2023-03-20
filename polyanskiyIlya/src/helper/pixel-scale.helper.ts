import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

// Макет создавался для экрана высотой 500px,
// поэтому делим имеющуюся высоту экрана на 500
const scaleFactor = height / 500;

const scalePixels = (size: number) => {
  return size * scaleFactor;
};

export default scalePixels;
