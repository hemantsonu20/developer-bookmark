import toolService from '../../services/toolService';

chrome.runtime.onInstalled.addListener(() => {
  // run tasks when tool is intalled
  console.log('Developer Bookmark init');
  toolService.saveAllTools().then((res) => {
    console.log('Developer Bookmark init complete', res);
  });
});
