import { COLOR_BLACK, FONT_DEFAULT_SEMIBOLD } from "constants/styles";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 28,
    gap: 17,
  },
  title: {
    fontFamily: FONT_DEFAULT_SEMIBOLD,
    color: COLOR_BLACK,
  },
});
