import { COLOR_PRIMARY, COLOR_WHITE } from "./styles";

export enum ButtonVariants {
  Primary = "primary", //default
  White = "white",
}

export const buttonTextColors = {
  [ButtonVariants.Primary]: COLOR_WHITE,
  [ButtonVariants.White]: COLOR_PRIMARY,
};

export const buttonBackgroundColor = {
  [ButtonVariants.Primary]: COLOR_PRIMARY,
  [ButtonVariants.White]: COLOR_WHITE,
};

export enum ButtonSize {
  Small = "small",
  Large = "large",
}

export enum ApplicationTypes {
  SP = "SERVICE_PROVIDER",
  CLI = "CLIENT",
}

export enum PressedButton {
  Left = "left",
  Right = "right",
}

export const BUTTON_THROTTLE_TIMEOUT = 900; // ms
