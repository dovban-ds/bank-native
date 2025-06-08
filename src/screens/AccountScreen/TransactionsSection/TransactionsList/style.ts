import {
  COLOR_BLACK,
  COLOR_GREY,
  FONT_DEFAULT,
  FONT_DEFAULT_MEDIUM,
  FONT_DEFAULT_SEMIBOLD,
  VERY_SMALL_SPACING,
} from "constants/styles";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoBlock: {
    flex: 1,
    gap: 4,
  },
  itemName: {
    fontFamily: FONT_DEFAULT_SEMIBOLD,
    color: COLOR_BLACK,
  },
  itemSubData: {
    fontSize: 12,
    fontFamily: FONT_DEFAULT,
    color: COLOR_GREY,
  },
  transactionData: {
    fontFamily: FONT_DEFAULT_MEDIUM,
    color: COLOR_BLACK,
  },
  flatListContainer: {
    gap: 24,
  },
  flatList: {
    flex: 1,
  },
});
