import React, { ReactNode, useCallback } from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { ChevronIcon } from "assets/icons/ChevronIcon";
import { AuthStackParamList } from "models/navigation";

import { style } from "./style";

interface ProfileHeaderProps {
  title: string;
  unableGoBack?: boolean;
  dataEdited?: boolean;
  additionalHeaderButton?: ReactNode;
  additionalHeaderContainer?: ViewStyle;

  goBackAction?: () => void;
  additionalHeaderAction?: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = React.memo(
  ({
    title,
    unableGoBack = false,
    additionalHeaderButton = null,
    additionalHeaderContainer = {},
    goBackAction = null,
    additionalHeaderAction = () => {},
  }) => {
    const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
    const route = useRoute();

    const goBack = useCallback(() => {
      if (goBackAction) {
        goBackAction();
      } else {
        navigation.goBack();
      }
    }, [navigation, route.name]);

    return (
      <View style={style.header}>
        {!unableGoBack ? (
          <TouchableOpacity style={style.backArrow} onPress={goBack}>
            <ChevronIcon />
          </TouchableOpacity>
        ) : (
          <View style={style.emptyBlock} />
        )}
        <Text style={style.title}>{title}</Text>
        {additionalHeaderButton ? (
          <TouchableOpacity
            onPress={additionalHeaderAction}
            style={[style.additionalButton, additionalHeaderContainer]}
          >
            {additionalHeaderButton}
          </TouchableOpacity>
        ) : (
          <View style={style.emptyBlock} />
        )}
      </View>
    );
  }
);
