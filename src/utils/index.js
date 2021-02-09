export const getOptionSpaces = (spaces) => {
  const titleSpaces = [];
  spaces.forEach((space) => {
    titleSpaces.push(space.node);
  });

  return titleSpaces;
};
