import React, { ReactNode, useCallback, useMemo } from "react";
import {
  ActivityIndicator,
  ImageSourcePropType,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { ImageStyle } from "expo-image";

import { capitalize, throttledButtonPress } from "helpers";
import {
  buttonBackgroundColor,
  ButtonSize,
  buttonTextColors,
  ButtonVariants,
} from "constants/buttons";
import { COLOR_GREY, DEFAULT_LOADER_SIZE } from "constants/styles";

import { style } from "./style";

interface Props {
  text?: string;
  buttonVariant?: ButtonVariants;
  buttonSize?: ButtonSize;
  buttonStyle?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  isDisabled?: boolean;
  loaderSize?: number;
  textStyle?: StyleProp<TextStyle>;
  iconLeft?: string | ImageSourcePropType | ReactNode;
  iconRight?: string | ImageSourcePropType | ReactNode;
  iconLeftContainerStyle?: StyleProp<ViewStyle>;
  iconRightContainerStyle?: StyleProp<ViewStyle>;
  iconLeftStyle?: StyleProp<ImageStyle>;
  iconRightStyle?: StyleProp<ImageStyle>;
  accessibilityLabel?: string;
  grayOutWhenDisabled?: boolean;

  onPress?: () => unknown;
}

export const ElevatedButton: React.FC<Props> = React.memo((props) => {
  const {
    text,
    buttonVariant,
    buttonSize,
    buttonStyle,
    isLoading,
    isDisabled,
    loaderSize,
    textStyle,
    iconLeft,
    iconRight,
    iconLeftContainerStyle,
    iconRightContainerStyle,
    iconLeftStyle,
    iconRightStyle,
    grayOutWhenDisabled = false,
    onPress,
  } = props;
  const color = buttonVariant
    ? buttonTextColors[buttonVariant]
    : buttonTextColors[ButtonVariants.Primary];
  const backgroundColor = buttonVariant
    ? buttonBackgroundColor[buttonVariant]
    : buttonBackgroundColor[ButtonVariants.Primary];
  const iconLeftContainer = useMemo<StyleProp<ViewStyle>>(
    () => [style.iconLeftContainer, iconLeftContainerStyle],
    [iconLeftContainerStyle]
  );
  const iconRightContainer = useMemo<StyleProp<ViewStyle>>(
    () => [style.iconRightContainer, iconRightContainerStyle],
    [iconRightContainerStyle]
  );
  const disabledStyle = useMemo(
    () => isDisabled && grayOutWhenDisabled && { backgroundColor: COLOR_GREY },
    [grayOutWhenDisabled, isDisabled]
  );

  const renderText = () => {
    const indicatorSize = buttonSize ?? ButtonSize.Small;
    const size = loaderSize ?? DEFAULT_LOADER_SIZE;

    return (
      <>
        {text ? (
          <Text
            style={[
              style.buttonText,
              buttonVariant && { color: buttonTextColors[buttonVariant] },
              textStyle,
              isLoading && { color: "transparent" },
            ]}
          >
            {capitalize(text)}
          </Text>
        ) : null}
        {isLoading && (
          <ActivityIndicator
            size={indicatorSize}
            color={color}
            style={{ width: size, height: size, position: "absolute" }}
          />
        )}
      </>
    );
  };

  const renderLeftIcon = useCallback(() => {
    if (!iconLeft) {
      return null;
    }

    if (React.isValidElement(iconLeft)) {
      return <View style={iconLeftContainer}>{iconLeft}</View>;
    }

    return null;
  }, [iconLeft, iconLeftContainer, iconLeftStyle]);

  const renderRightIcon = useCallback(() => {
    if (!iconRight) {
      return null;
    }

    if (React.isValidElement(iconRight)) {
      return <View style={iconRightContainer}>{iconRight}</View>;
    }

    return null;
  }, [iconRight, iconRightContainer, iconRightStyle]);

  const handleButtonPress = useMemo(
    () => throttledButtonPress(onPress),
    [onPress]
  );

  return (
    <TouchableOpacity
      style={[style.button, { backgroundColor }, buttonStyle, disabledStyle]}
      onPress={handleButtonPress}
      disabled={!onPress || isDisabled}
    >
      {renderLeftIcon()}
      {renderText()}
      {renderRightIcon()}
    </TouchableOpacity>
  );
});
