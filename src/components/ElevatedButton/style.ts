import { StyleSheet } from "react-native";

import {
  COLOR_WHITE,
  DEFAULT_BORDER_RADIUS,
  FONT_DEFAULT_SEMIBOLD,
  MIDDLE_SPACING,
  VERY_SMALL_SPACING,
} from "constants/styles";

const DEFAULT_BUTTON_RADIUS = 300;

export const style = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: MIDDLE_SPACING,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: DEFAULT_BUTTON_RADIUS,
  },
  buttonText: {
    fontFamily: FONT_DEFAULT_SEMIBOLD,
    fontSize: 16,
    lineHeight: 24,
    color: COLOR_WHITE,
  },
  iconLeftContainer: {
    marginRight: VERY_SMALL_SPACING,
  },
  iconRightContainer: {
    marginLeft: VERY_SMALL_SPACING,
  },
});
