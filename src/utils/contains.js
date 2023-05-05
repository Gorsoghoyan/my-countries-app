
export const contains = (array, value) => {
  if (array === null) return true;
  
  return array.indexOf(value) !== -1;
};