import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import scalePixels from '../../helper/pixel-scale.helper';

type Props = {
  text?: string;
  title?: string;
};

const Comment = ({text, title}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title || 'Нет данных'}</Text>
      <View style={styles.bodyContainer}>
        <Text style={styles.body}>{text || 'Нет данных'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#A3AAAE',
  },
  title: {
    fontSize: scalePixels(14),
    fontFamily: 'Roboto-Medium',
    color: '#FFFFFF',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 4,
  },
  bodyContainer: {
    maxHeight: scalePixels(40),
    marginLeft: 10,
    marginBottom: 10,
  },
  body: {
    color: '#FFFFFF',
    fontSize: scalePixels(10),
  },
});

export default Comment;
