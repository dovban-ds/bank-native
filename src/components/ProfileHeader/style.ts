import { StyleSheet } from "react-native";

import {
  COLOR_BLACK,
  COLOR_WHITE,
  FONT_DEFAULT_MEDIUM,
  SMALL_ITEGER_SPACING,
} from "constants/styles";

const BACK_ARROW_SIZE = 40;
const DEFAULT_HEADER_INSETS = 16;

export const style = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 48,
  },
  backArrow: {
    width: BACK_ARROW_SIZE,
    height: BACK_ARROW_SIZE,
    alignItems: "center",
    justifyContent: "center",
    left: DEFAULT_HEADER_INSETS,
    zIndex: 1,
    backgroundColor: COLOR_WHITE,
    borderRadius: 30,
  },
  emptyBlock: {
    width: BACK_ARROW_SIZE,
    height: BACK_ARROW_SIZE,
    right: SMALL_ITEGER_SPACING,
  },
  title: {
    fontSize: 16,
    fontFamily: FONT_DEFAULT_MEDIUM,
    color: COLOR_BLACK,
    flex: 1,
    textAlign: "center",
  },
  additionalButton: {
    width: BACK_ARROW_SIZE,
    alignItems: "center",
    justifyContent: "center",
    right: DEFAULT_HEADER_INSETS,
  },
});
