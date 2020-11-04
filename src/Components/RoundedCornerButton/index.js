/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { View, Text, TouchableHighlight } from 'react-native';
import { Colors } from '../../Theme';
import styles from './Style';

export const RoundedCornerButton = ({
  title,
  onPress,
  style,
  textStyle,
  color = Colors.primary,
  prefixIcon,
  suffixIcon,
}) => {
  return (
    <TouchableHighlight onPress={onPress} style={{ borderRadius: 20 }}>
      <View
        style={{
          ...styles.buttonStyle,
          ...style,
          backgroundColor: color,
        }}>
        {prefixIcon}
        <Text
          style={{
            ...styles.textStyle,
            ...textStyle,
          }}>
          {title}
        </Text>
        {suffixIcon}
      </View>
    </TouchableHighlight>
  );
};
