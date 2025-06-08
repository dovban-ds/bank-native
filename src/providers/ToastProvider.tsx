import { CustomToast, ToastType } from "components/CustomToast";
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";

import { Toast } from "services/toast";

const DEFAULT_TOAST_DURATION = 2000;

export interface ToastParams {
  message: string;
  type?: ToastType;
  duration?: number;
  accessibilityLabel?: string;
}

export interface ToastContextValue {
  show: (params: ToastParams) => void;
  hide: () => void;
}

const EXITING_DELAY = 800;

const defaultToastParams: ToastParams = {
  message: "",
  type: ToastType.INFO,
  duration: DEFAULT_TOAST_DURATION,
};

export const ToastContext = React.createContext<ToastContextValue | null>(null);

export const ToastProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastParams, setToastParams] =
    useState<ToastParams>(defaultToastParams);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const hide = useCallback(() => {
    setIsToastVisible(false);
    setToastParams(defaultToastParams);
  }, []);

  const show = useCallback(
    (params: ToastParams) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setToastParams(params);
      setIsToastVisible(true);
      timeoutRef.current = setTimeout(() => {
        hide();
        timeoutRef.current = null;
      }, (params.duration ?? DEFAULT_TOAST_DURATION) + EXITING_DELAY);
    },
    [hide]
  );

  const value = useMemo(
    () => ({
      show,
      hide,
    }),
    [hide, show]
  );

  useEffect(() => {
    Toast.init(value);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {isToastVisible ? <CustomToast {...toastParams} /> : null}
    </ToastContext.Provider>
  );
};
