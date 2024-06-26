import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {Color} from '../GlobalStyles';

const Button = props => {
  const filledBgColor = props.color || Color.primary;
  const outlinedColor = Color.white;
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled ? Color.white : Color.primary;

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...{backgroundColor: bgColor},
        ...props.style,
      }}
      onPress={props.onPress}>
      <Text style={{fontSize: 18, ...{color: textColor}}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: Color.primary,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Button;
