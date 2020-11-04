/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native';
import { Colors, FontSize } from './Variables';

export default StyleSheet.create({
  textSmall: {
    fontSize: FontSize.small,
  },
  textRegular: {
    fontSize: FontSize.regular,
  },
  textLarge: {
    fontSize: FontSize.large,
  },
  titleSmall: {
    fontSize: FontSize.small * 2,
    fontWeight: 'bold',
  },
  titleRegular: {
    fontSize: FontSize.regular * 2,
    fontWeight: 'bold',
  },
  titleLarge: {
    fontSize: FontSize.large * 2,
    fontWeight: 'bold',
  },
  textCenter: {
    textAlign: 'center',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  textPrimary: {
    color: Colors.primary,
  },
  textSecondary: {
    color: Colors.secondary,
  },
  textWhite: {
    color: Colors.white,
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
});
