import {
  COLOR_BLACK,
  COLOR_GREY,
  COLOR_WHITE,
  FONT_DEFAULT_MEDIUM,
  MIDDLE_SPACING,
} from "constants/styles";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  dataContainer: {
    backgroundColor: COLOR_WHITE,
    marginHorizontal: MIDDLE_SPACING,
    marginTop: 40,
    paddingHorizontal: 16.75,
    paddingVertical: 24,
    gap: 16,
    borderRadius: 16,
  },
  itemText: {
    lineHeight: 22,
    fontFamily: FONT_DEFAULT_MEDIUM,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTitle: {
    color: COLOR_GREY,
  },
  itemData: {
    color: COLOR_BLACK,
  },
});
