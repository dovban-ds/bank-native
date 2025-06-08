import { StyleSheet } from "react-native";

import {
  EXTRA_LARGE_BORDER_RADIUS,
  FONT_DEFAULT_MEDIUM,
} from "constants/styles";

export const style = StyleSheet.create({
  toast: {
    position: "absolute",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    top: 120,
    left: 16,
    right: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 8,
    borderRadius: EXTRA_LARGE_BORDER_RADIUS,
    zIndex: 1,
  },
  text: {
    fontSize: 14,
    fontFamily: FONT_DEFAULT_MEDIUM,
  },
});
