import devtools from '../data/devtools';

const DEV_TOOLS = 'DeveloperBookmark.devTools';

const storageApi = chrome.storage.sync;

/**
 * Saves tools to storage,
 * It is called from background script when extension is installed.
 */
const saveAllTools = async (tools = devtools) => {
  return new Promise((resolve, reject) => {
    storageApi.set({ [DEV_TOOLS]: tools }, () => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(tools);
      }
    });
  });
};

/**
 * Returns all tools data, this contains all the tools with their data
 */
const getAllTools = async () => {
  return new Promise((resolve) => {
    storageApi.get(DEV_TOOLS, (result) => {
      resolve(result[DEV_TOOLS] || {});
    });
  });
};

const starTool = async (toolKey) => {
  const devtools = await getAllTools();
  devtools[toolKey].starred = true;
  await saveAllTools(devtools);
  return devtools[toolKey];
};

const unstarTool = async (toolKey) => {
  const devtools = await getAllTools();
  devtools[toolKey].starred = false;
  await saveAllTools(devtools);
  return devtools[toolKey];
};

export default {
  saveAllTools,
  getAllTools,
  starTool,
  unstarTool,
};
