import {InputModeOptions, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import scalePixels from '../../helper/pixel-scale.helper';

type Props = {
  value: string;
  placeholder: string;
  inputMode?: InputModeOptions;
  onChange: (text: string) => void;
};

const Input = ({value, placeholder, inputMode, onChange}: Props) => {
  return (
    <>
      <TextInput
        spellCheck={false}
        editable
        value={value}
        inputMode={inputMode || 'none'}
        placeholder={placeholder}
        onChangeText={onChange}
        allowFontScaling={false}
        style={styles.input}
        placeholderTextColor="#A3AAAE"
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 18,
    marginBottom: 12,
    marginTop: 16,
    paddingBottom: 4,
    fontSize: scalePixels(14),
    color: '#A3AAAE',
    borderBottomWidth: 1,
    borderColor: '#A3AAAE',
    textDecorationLine: 'none',
  },
});

export default Input;
