const filterStarred = (tools) => {
  return Object.entries(tools).filter(([_, { starred }]) => starred);
};

const filterUnstarred = (tools) => {
  return Object.entries(tools).filter(([_, { starred }]) => !starred);
};

export { filterStarred, filterUnstarred };
