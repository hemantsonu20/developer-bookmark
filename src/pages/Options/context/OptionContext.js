import React, { useReducer, useEffect } from 'react';
import { optionReducer, initialState } from './optionReducer';
import dispatchMiddleware from './dispatchMiddleware';
import optionActions from './optionActions';

const OptionStateContext = React.createContext();
const OptionDispatchContext = React.createContext();

const OptionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(optionReducer, initialState);
  const dispatchWithMiddleware = dispatchMiddleware(dispatch);

  // load initial values
  useEffect(() => {
    console.log('Inside Effect');
    if (!state.allTools.loaded) {
      console.log('Loading all tools');
      dispatchWithMiddleware(optionActions.loadAllTools());
    }
  }, [state.allTools.loaded, dispatchWithMiddleware]);

  console.log('In OptionContextProvider render');

  return (
    <OptionStateContext.Provider value={state}>
      <OptionDispatchContext.Provider value={dispatchWithMiddleware}>
        {children}
      </OptionDispatchContext.Provider>
    </OptionStateContext.Provider>
  );
};

export { OptionStateContext, OptionDispatchContext, OptionContextProvider };
