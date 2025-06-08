import {
  COLOR_WHITE,
  DEFAULT_BORDER_RADIUS,
  DEFAULT_INPUT_HEIGHT,
  DEFAULT_SPACING,
  FONT_DEFAULT_MEDIUM,
  FONT_DEFAULT_SEMIBOLD,
  MIDDLE_SPACING,
} from "constants/styles";
import { StyleSheet } from "react-native";
import { isAndroid, isIOS } from "utils/platform";

export const style = StyleSheet.create({
  container: {
    position: "relative",
  },
  textInput: {
    borderRadius: DEFAULT_BORDER_RADIUS,
    paddingHorizontal: MIDDLE_SPACING,
    height: DEFAULT_INPUT_HEIGHT,
    paddingRight: 50,
    backgroundColor: COLOR_WHITE,
    fontFamily: FONT_DEFAULT_MEDIUM,
    ...(isIOS() && { paddingTop: DEFAULT_SPACING }),
    ...(isAndroid() && { paddingTop: 25 }),
  },
  placeholder: {
    position: "absolute",
    pointerEvents: "none",
    fontFamily: FONT_DEFAULT_SEMIBOLD,
    left: 20,
    top: 23,
    includeFontPadding: false,
    backgroundColor: "transparent",
    zIndex: 1,
  },
  rightIconContainer: {
    position: "absolute",
    right: 22,
    top: 23,
  },
});
