import { ToastContextValue, ToastParams } from "providers/ToastProvider";

export class Toast {
  private static context: ToastContextValue;

  public static init = (contextValue: ToastContextValue) => {
    this.context = contextValue;
  };

  public static show = (params: ToastParams) => this.context.show(params);

  public static hide = () => this.context.hide();
}
