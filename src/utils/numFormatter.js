
export const numFormatter = (num) => {
  return new Intl.NumberFormat('en-US', {
    notation: "compact",
    compactDisplay: "short"
  }).format(Number(num));
};