
export const stringFormatter = (value) => {
  const limit = 10; 
  
  if (value.length < limit) return value;

  return value.slice(0, 9) + "...";
};