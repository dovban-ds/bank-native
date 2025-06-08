export interface Transaction {
  amount: number;
  bank: string;
  name: string;
  time: string;
}

export interface User {
  accountType: string;
  availableBalance: number;
  currency: string;
  dateAdded: string;
  transactions: Transaction[];
}

export interface BasicAuthCredentials {
  username?: string;
  password?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  basicAuthCredentials: BasicAuthCredentials | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isTourCarouselSkipped: boolean;
  error: string | null;
}

export interface AuthActions {
  setTourCarouselSkipped: (skipped: boolean) => void;
  signup: (
    userData: SignupData
  ) => Promise<ApiResponse<{ basicAuthCredentials: BasicAuthCredentials }>>;
  getAccountDetails: () => Promise<ApiResponse<User>>;
  clearError: () => void;
}

export type AuthStore = AuthState & AuthActions;

export interface SignupData {
  name: string;
  email: string;
  password: string;
}

export interface SigninCredentials {
  email: string;
  name: string;
  password: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
