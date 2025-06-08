import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, Animated, Pressable } from "react-native";

import { style } from "./style";
import { COLOR_GREY_LIGHT } from "constants/styles";
import {
  DEFAULT_LOGICAL_VALUE,
  DEFAULT_POSITIVE_VALUE,
} from "constants/number";

export const CustomTextInput = ({
  placeholder = "",
  value,
  onChangeText,
  containerStyles = {},
  rightIcon = null,
  rightIconAction = () => {},
  placeholderTextColor = COLOR_GREY_LIGHT,
  focusedPlaceholderColor = COLOR_GREY_LIGHT,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);

  const animatedValue = useRef(
    new Animated.Value(hasValue || isFocused ? 1 : 0)
  ).current;
  const textInputRef = useRef(null);

  const shouldFloatLabel = isFocused || hasValue;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: shouldFloatLabel ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [shouldFloatLabel, animatedValue]);

  const labelTranslateY = animatedValue.interpolate({
    inputRange: [DEFAULT_LOGICAL_VALUE, DEFAULT_POSITIVE_VALUE],
    outputRange: [DEFAULT_LOGICAL_VALUE, -12], // Поднимаем на 20 пикселей вверх
  });

  // Интерполяция для размера шрифта
  const labelFontSize = animatedValue.interpolate({
    inputRange: [DEFAULT_LOGICAL_VALUE, DEFAULT_POSITIVE_VALUE],
    outputRange: [14, 10], // Уменьшаем с 16 до 12
  });

  // Интерполяция для цвета
  const labelColor = animatedValue.interpolate({
    inputRange: [DEFAULT_LOGICAL_VALUE, DEFAULT_POSITIVE_VALUE],
    outputRange: [placeholderTextColor, focusedPlaceholderColor],
  });

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChangeText = (text) => {
    setHasValue(!!text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  const handlePlaceholderPress = () => {
    textInputRef.current?.focus();
  };

  return (
    <View style={[style.container, containerStyles]}>
      <Animated.Text
        onPress={handlePlaceholderPress}
        style={[
          style.placeholder,
          {
            transform: [{ translateY: labelTranslateY }],
            fontSize: labelFontSize,
            color: labelColor,
          },
        ]}
      >
        {placeholder}
      </Animated.Text>

      <TextInput
        {...props}
        ref={textInputRef}
        style={style.textInput}
        value={value}
        onChangeText={handleChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="" // removing default placeholder
      />
      <Pressable onPress={rightIconAction} style={style.rightIconContainer}>
        {rightIcon}
      </Pressable>
    </View>
  );
};
