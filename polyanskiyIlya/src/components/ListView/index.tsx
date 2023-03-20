import {StyleSheet, View} from 'react-native';
import React from 'react';
import ListCell, {CellModel} from '../ListCell';
import scalePixels from '../../helper/pixel-scale.helper';

type Props = {
  cellList: CellModel[];
  removeHandler: (id: number) => void;
};

const ListView = ({cellList, removeHandler}: Props) => {
  return (
    <View style={styles.container}>
      {cellList.map(item => (
        <View key={item.id} style={styles.cellItem}>
          <ListCell {...item} deleteHandler={removeHandler} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  cellItem: {
    height: scalePixels(48),
  },
});

export default ListView;
