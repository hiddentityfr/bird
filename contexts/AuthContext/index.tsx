import * as React from 'react';

import { ICompany } from '@typings/Company';

export enum AuthActions {
  UPDATE_COMPANY = 'update_company',
  RESET = 'reset',
}

interface ActionProps {
  company: Partial<ICompany>;
}

interface Action {
  type: AuthActions;
  props?: Partial<ActionProps>;
}

type State = Partial<ActionProps>;

const initialState: State = {};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const AuthStateContext: React.Context<State> = React.createContext();
const AuthDispatchContext: React.Context<React.Dispatch<
  Action
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
>> = React.createContext();

const AuthReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case AuthActions.UPDATE_COMPANY: {
      return {
        ...state,
        company: action.props?.company ?? state.company,
      };
    }
    case AuthActions.RESET: {
      return initialState;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer<React.Reducer<State, Action>>(
    AuthReducer,
    initialState
  );

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const useAuthState = (): State => {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }
  return context;
};

export const useAuthDispatch = (): React.Dispatch<Action> => {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider');
  }
  return context;
};

export const useAuth = (): [State, React.Dispatch<Action>] => [
  useAuthState(),
  useAuthDispatch(),
];
