import optionActions from './optionActions';
import toolService from '../../../services/toolService';

const middlewares = {
  [optionActions.LOAD_ALL_TOOLS](dispatch) {
    toolService
      .getAllTools()
      .then((res) => dispatch(optionActions.loadAllToolsSuccess(res)));
  },

  [optionActions.STAR_TOOL](dispatch, { payload: toolKey }) {
    console.log('middleaware star tool', toolKey);
    toolService
      .starTool(toolKey)
      .then(() => dispatch(optionActions.starToolSuccess(toolKey)));
  },

  [optionActions.UNSTAR_TOOL](dispatch, { payload: toolKey }) {
    console.log('middleaware unstar tool', toolKey);
    toolService
      .unstarTool(toolKey)
      .then(() => dispatch(optionActions.unstarToolSuccess(toolKey)));
  },
};

const dispatchMiddleware = (dispatch) => {
  return (action) => {
    if (middlewares[action.type]) {
      return middlewares[action.type](dispatch, action);
    }
    return dispatch(action);
  };
};

export default dispatchMiddleware;
