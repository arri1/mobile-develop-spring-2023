import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import scalePixels from '../../helper/pixel-scale.helper';

export interface CellModel {
  title: string;
  id: number;
}

type Props = CellModel & {
  deleteHandler: (id: number) => void;
};

const ListCell = ({title, id, deleteHandler}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.formRow}>
        <Text style={styles.cellTitle}>{title}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => deleteHandler(id)}>
            <Icon
              name="trash-can-outline"
              color={'red'}
              size={scalePixels(16)}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formRow: {
    flexDirection: 'row',
  },
  cellTitle: {
    marginHorizontal: 16,
    marginVertical: 8,
    fontSize: scalePixels(12),
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
    flex: 1,
    verticalAlign: 'middle',
  },
  iconContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  trashIcon: {
    width: scalePixels(16),
    height: scalePixels(16),
  },
});

export default ListCell;
