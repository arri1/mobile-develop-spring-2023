import React from 'react';
import { View, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import AppButton from './appButton';

const ImageSelector = () => {
    const image = useSelector((state) => state.image.image);
    const dispatch = useDispatch();
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });
        if (!result.canceled) {
          const source = { uri: result.assets[0].uri };
          dispatch({ type: 'PICK_IMAGE', payload: source });
        }
      };
      const clearImage = () => {
        dispatch({ type: 'CLEAR_IMAGE' });
    };
  
    return (
        <View>
        {image ? (
            <>
            <Image source={image} style={{ width: 350, height: 500 }} />
            <AppButton title="Clear" onPress={clearImage} />
            </>
        ) : (
            <AppButton title="Pick Image" onPress={pickImage} />
        )}
        </View>
  );
};

export default ImageSelector;
