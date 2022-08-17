import { UserToken } from '@js-camp/core/models/userToken';

/** Login state. */
export interface LoginState {

  /** User Token. */
  readonly userToken: UserToken;

  /** Error. */
  readonly error?: string;

  /** Whether login or not. */
  readonly isLoading: boolean;
}

export const initialState: LoginState = {
  userToken: { jwt: '', refreshJwt: '' },
  isLoading: false,
};
