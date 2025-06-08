import { throttle } from "throttle-debounce";

import {
  DEFAULT_LOGICAL_VALUE,
  DEFAULT_POSITIVE_VALUE,
} from "constants/number";
import { BUTTON_THROTTLE_TIMEOUT } from "constants/buttons";

export const capitalize = (text?: string): string => {
  if (!text) {
    return "";
  }

  return (
    text.charAt(DEFAULT_LOGICAL_VALUE).toUpperCase() +
    text.slice(DEFAULT_POSITIVE_VALUE)
  );
};

export const decapitalize = (text?: string): string => {
  if (!text) {
    return "";
  }

  return (
    text.charAt(DEFAULT_LOGICAL_VALUE).toLowerCase() +
    text.slice(DEFAULT_POSITIVE_VALUE)
  );
};

export const throttledButtonPress = <T>(func?: (arg: T) => void) =>
  throttle(
    BUTTON_THROTTLE_TIMEOUT,
    (arg: T) => {
      func?.(arg);
    },
    { noTrailing: true }
  );

export const formatBalance = (
  balance: number,
  fractionDigits: number = 2,
  currency: string = "",
  withSign: boolean = false
) => {
  let sign = balance < 0 ? "-" : "+";

  if (!withSign) {
    sign = "";
  }

  const absoluteAmount = Math.abs(balance);

  const formattedBalance = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(absoluteAmount);

  return `${sign}${currency}${formattedBalance}`;
};
