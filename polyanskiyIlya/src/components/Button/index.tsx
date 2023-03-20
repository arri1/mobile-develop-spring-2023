import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import scalePixels from '../../helper/pixel-scale.helper';

type Props = {
  title: string;
  onPress: () => void;
};

const Button = ({title, onPress}: Props) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 24,
    marginVertical: 8,
    backgroundColor: '#2A3443',
    borderRadius: 12,
    paddingVertical: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: scalePixels(14),
    color: '#FFFFFF',
  },
});

export default Button;
