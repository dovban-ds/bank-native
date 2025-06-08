import {
  BaseSyntheticEvent,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Linking,
  Pressable,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";

import { EyeIcon } from "assets/icons/EyeIcon";
import { Checkbox } from "components/Checkbox";
import { CustomTextInput } from "components/CustomTextInput";
import { ToastType } from "components/CustomToast";
import { AnimatedMessage } from "components/AnimatedMessage";
import { MAIN_NAVIGATOR, ROUTE_INIT } from "constants/routes";
import { Toast } from "services/toast";
import { AuthStackParamList, MainStackParamList } from "models/navigation";
import { useAuthStore } from "store/useAuthStore";

import { style } from "./style";
import { SIGN_IN_LINK, TERMS_AND_CONDITIONS_LINK } from "constants/links";

const schema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/, {
      message: "Password must contain uppercase, lowercase letters and numbers",
    }),
  terms: z.boolean().refine((value) => value === true, {
    message: "Please, familiarize yourself with the license agreement",
  }),
});

type LoginFormData = z.infer<typeof schema>;

type UseLoginScreenReturn = {
  controllers: ReactElement;
  isSubmitting: boolean;
  goBackAction: () => void;
  signInHandler: () => void;
  handleSubmit: (
    callback: (data: LoginFormData) => void | Promise<void>
  ) => (e?: BaseSyntheticEvent) => Promise<void>;
  onSubmit: (data: LoginFormData) => Promise<void>;
};

type NavigationProp = CompositeNavigationProp<
  StackNavigationProp<AuthStackParamList>,
  StackNavigationProp<MainStackParamList>
>;

export const useLoginScreen = (): UseLoginScreenReturn => {
  const [isPassVisible, setIsPassVisible] = useState(false);

  const { signup } = useAuthStore();

  // todo: Consider using expo-web-browser / react-native-webview
  const signInHandler = useCallback(() => Linking.openURL(SIGN_IN_LINK), []);
  const termsAndConditionsHandler = useCallback(
    () => Linking.openURL(TERMS_AND_CONDITIONS_LINK),
    []
  );

  const navigation = useNavigation<NavigationProp>();

  const goBackAction = useCallback(() => navigation.navigate(ROUTE_INIT), []);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      terms: false,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async ({ name, password, email }) => {
    try {
      const signupResponse = await signup({
        name,
        password,
        email,
      });

      Toast.show({
        type: ToastType.SUCCESS,
        message: "Logged in successfully!",
      });

      navigation.navigate(MAIN_NAVIGATOR);
    } catch (e) {
      Toast.show({
        type: ToastType.ERROR,
        message: "Something went wrong",
      });
    }
  };

  const togglePassVisibility = useCallback(
    () => setIsPassVisible((old) => !old),
    []
  );

  const controllers = useCallback(
    () => (
      <View style={style.controllersContainer}>
        <View>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                placeholder="Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="name"
          />
          <AnimatedMessage error={errors?.name} />
        </View>

        <View>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />
            )}
            name="email"
          />
          <AnimatedMessage error={errors?.email} />
        </View>

        <View>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomTextInput
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                rightIcon={<EyeIcon />}
                rightIconAction={togglePassVisibility}
                secureTextEntry={!isPassVisible}
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect={false}
              />
            )}
            name="password"
          />
          <AnimatedMessage error={errors?.password} />
        </View>

        <View>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <View style={style.checkboxBlock}>
                <Checkbox
                  isChecked={value}
                  containerStyle={style.checkBoxContainer}
                  onPress={() => onChange(!value)}
                />
                <View style={style.checkboxTextBlock}>
                  <Text>
                    <Text style={style.termsText}>
                      By signing up, you agree to the{" "}
                      <Text
                        onPress={termsAndConditionsHandler}
                        suppressHighlighting={true}
                        style={[style.termsLink, style.termsText]}
                      >
                        Terms of Service and Privacy Policy
                      </Text>
                    </Text>
                  </Text>
                </View>
              </View>
            )}
            name="terms"
          />
          <AnimatedMessage error={errors?.terms} />
        </View>
      </View>
    ),
    [
      control,
      errors,
      isPassVisible,
      togglePassVisibility,
      termsAndConditionsHandler,
    ]
  );

  return {
    controllers: controllers(),
    isSubmitting,
    goBackAction,
    signInHandler,
    handleSubmit,
    onSubmit,
  };
};
