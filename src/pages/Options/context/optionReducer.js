import optionActions from './optionActions';

const initialState = {
  allTools: {
    data: {},
    loaded: false,
  },
};

const reducers = {
  [optionActions.LOAD_ALL_TOOLS_SUCCESS](state, { payload }) {
    console.log('In LOAD_ALL_TOOLS_SUCCESS reducer', payload);
    return {
      ...state,
      allTools: {
        ...state.allTools,
        data: payload,
        loaded: true,
      },
    };
  },

  [optionActions.STAR_TOOL_SUCCESS](state, { payload }) {
    console.log('In STAR_TOOL_SUCCESS reducer', payload);
    const newState = {
      ...state,
      allTools: {
        ...state.allTools,
        data: {
          ...state.allTools.data,
          [payload]: {
            ...state.allTools.data[payload],
            starred: true
          }
        }
      }
    };
    console.log('In STAR_TOOL_SUCCESS reducer state', state);
    return newState;
  },

  [optionActions.UNSTAR_TOOL_SUCCESS](state, { payload }) {
    console.log('In UNSTAR_TOOL_SUCCESS reducer', payload);
    return {
      ...state,
      allTools: {
        ...state.allTools,
        data: {
          ...state.allTools.data,
          [payload]: {
            ...state.allTools.data[payload],
            starred: false
          }
        }
      }
    };
  },

};

const optionReducer = (state, action) => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action);
  }
  return state;
};

export { optionReducer, initialState };
