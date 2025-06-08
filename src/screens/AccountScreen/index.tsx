import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback } from "react";
import { ActivityIndicator, View } from "react-native";

import { useAuthLoading, useGetAccDetails, useUser } from "store/useAuthStore";
import { ProfileHeader } from "components/ProfileHeader";

import { InfoSection } from "./InfoSection";
import { DetailsSection } from "./DetailsSection";
import { TransactionsSection } from "./TransactionsSection";
import { style } from "./style";

export const AccountScreen: React.FC = () => {
  const getAccDetails = useGetAccDetails();
  const user = useUser();
  const isLoading = useAuthLoading();

  // preventing back action as per figma guide
  const handleGoBack = useCallback(() => {}, []);

  useFocusEffect(
    useCallback(() => {
      if (!user) {
        getAccDetails();
      }
    }, [user, getAccDetails])
  );

  return (
    <SafeAreaView style={style.safeArea}>
      <ProfileHeader title="My account" goBackAction={handleGoBack} />
      {isLoading || !user ? (
        <ActivityIndicator size={"large"} style={style.loaderContainer} />
      ) : (
        <View style={style.contentContainer}>
          <InfoSection />
          <DetailsSection />
          <TransactionsSection />
        </View>
      )}
    </SafeAreaView>
  );
};
