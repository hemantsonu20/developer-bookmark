const actionTypes = {
  LOAD_ALL_TOOLS: 'LOAD_ALL_TOOLS',
  LOAD_ALL_TOOLS_SUCCESS: 'LOAD_ALL_TOOLS_SUCCESS',
  STAR_TOOL: 'STAR_TOOL',
  STAR_TOOL_SUCCESS: 'STAR_TOOL_SUCESS',
  UNSTAR_TOOL: 'UNSTAR_TOOL',
  UNSTAR_TOOL_SUCCESS: 'UNSTAR_TOOL_SUCCESS',
};

const actionCreators = {
  loadAllTools(payload) {
    return {
      type: actionTypes.LOAD_ALL_TOOLS,
      payload,
    };
  },

  loadAllToolsSuccess(payload) {
    return {
      type: actionTypes.LOAD_ALL_TOOLS_SUCCESS,
      payload,
    };
  },

  starTool(payload) {
    console.log('action star tool', payload);
    return {
      type: actionTypes.STAR_TOOL,
      payload,
    };
  },

  starToolSuccess(payload) {
    return {
      type: actionTypes.STAR_TOOL_SUCCESS,
      payload,
    };
  },

  unstarTool(payload) {
    console.log('action unstar tool', payload);
    return {
      type: actionTypes.UNSTAR_TOOL,
      payload,
    };
  },

  unstarToolSuccess(payload) {
    return {
      type: actionTypes.UNSTAR_TOOL_SUCCESS,
      payload,
    };
  },
};

export default { ...actionTypes, ...actionCreators };
