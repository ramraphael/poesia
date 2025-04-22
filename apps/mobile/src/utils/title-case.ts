export const titleCase = (string: string) => {
  return string.split(" ").map((word) => {
    if (word.length > 1) {
      const lower = word.toLowerCase();
      return lower[0].toUpperCase() + lower.slice(1);
    }
  });
};
