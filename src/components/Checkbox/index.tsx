import { Pressable, ViewStyle } from "react-native";

import { CheckedIcon } from "assets/icons/CheckedIcon";

import { style } from "./style";

type CheckboxProps = {
  isChecked: boolean;
  containerStyle?: ViewStyle;

  onPress: () => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  isChecked,
  containerStyle = {},
  onPress,
}) => {
  if (isChecked) {
    return (
      <Pressable onPress={onPress} style={containerStyle}>
        <CheckedIcon />
      </Pressable>
    );
  }

  return (
    // todo: consider bigger snap points, need to check with real device
    <Pressable style={[style.uncheckedBox, containerStyle]} onPress={onPress} />
  );
};
