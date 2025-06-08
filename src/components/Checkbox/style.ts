import { DEFAULT_POSITIVE_VALUE } from "constants/number";
import { COLOR_BORDER_PRIMARY, COLOR_WHITE } from "constants/styles";
import { StyleSheet } from "react-native";

const CHECKBOX_SIZE = 16;
const CHECKBOX_RADIUS = 4;

export const style = StyleSheet.create({
  uncheckedBox: {
    backgroundColor: COLOR_WHITE,
    borderColor: COLOR_BORDER_PRIMARY,
    borderWidth: DEFAULT_POSITIVE_VALUE,
    height: CHECKBOX_SIZE,
    width: CHECKBOX_SIZE,
    borderRadius: CHECKBOX_RADIUS,
  },
});
