import React from 'react'
import { AppState } from '../model';
import { Action, ActionType } from './actions';

type ContextProps = {
  state: AppState,
  dispatch: (action: Action) => void
}

export const StoreCtx = React.createContext<Partial<ContextProps>>({});

export type Provider = {
  reducer: (state: AppState, action: Action) => AppState,
  initialState: AppState
};

export const Store: React.FC<Provider> = ({ reducer, initialState, children }) => {

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <StoreCtx.Provider value={{state, dispatch}}>
      {children}
    </StoreCtx.Provider>
  )
};

export const useStore = () => React.useContext(StoreCtx);

export const useAppState = (selector: (state: AppState) => any = (state => state)) => {
  return selector(React.useContext(StoreCtx).state as AppState);
}
export const useDispatch = () => React.useContext(StoreCtx).dispatch as (action: Action) => void;
