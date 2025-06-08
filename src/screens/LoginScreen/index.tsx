import { SafeAreaView } from "react-native-safe-area-context";
import {
  Keyboard,
  Pressable,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { ElevatedButton } from "components/ElevatedButton";
import { ProfileHeader } from "components/ProfileHeader";

import { useLoginScreen } from "./useLoginScreen";
import { style } from "./style";

export const LoginScreen = () => {
  const {
    controllers,
    isSubmitting,
    goBackAction,
    signInHandler,
    handleSubmit,
    onSubmit,
  } = useLoginScreen();

  return (
    <SafeAreaView style={style.safeArea}>
      <ProfileHeader title="" goBackAction={goBackAction} />
      {/* TODO: need further investigation, if we need keyboardAwareView here */}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={style.scrollView}
        nestedScrollEnabled={true}
        onTouchStart={Keyboard.dismiss}
      >
        <View style={style.titleContainer}>
          <Text style={style.title}>Create account</Text>
          <Text style={style.subtitle}>
            Complete the sign up to get started
          </Text>
        </View>
        {controllers}
      </ScrollView>
      <View style={style.footerBlock}>
        <View style={style.footerInfoBlock}>
          <Text style={style.footerText}>Already have an account?</Text>
          <Text
            onPress={signInHandler}
            style={[style.footerText, style.footerLink]}
            suppressHighlighting={true}
          >
            Sign in
          </Text>
        </View>
        <ElevatedButton
          text="Create account"
          onPress={handleSubmit(onSubmit)}
          isLoading={isSubmitting}
          isDisabled={isSubmitting}
        />
      </View>
    </SafeAreaView>
  );
};
