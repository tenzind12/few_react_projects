export const rating = (nutriscore_grade) => {
  switch (nutriscore_grade) {
    case 'a':
      return '⭐⭐⭐⭐⭐';
    case 'b':
      return '⭐⭐⭐⭐';
    case 'c':
      return '⭐⭐⭐';
    case 'd':
      return '⭐⭐';
    case 'e':
      return '⭐';
    default:
      return 'No rating available';
  }
};
