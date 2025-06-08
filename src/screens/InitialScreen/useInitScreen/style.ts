import {
  COLOR_WHITE,
  FONT_DEFAULT_MEDIUM,
  SMALL_ITEGER_SPACING,
} from "constants/styles";
import { StyleSheet } from "react-native";

const IMAGE_DEFAULT_SIZE = 360;

export const style = StyleSheet.create({
  image: {
    width: IMAGE_DEFAULT_SIZE,
    height: IMAGE_DEFAULT_SIZE,
  },
  skipButton: {
    fontFamily: FONT_DEFAULT_MEDIUM,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});
