export function repeatCategories(categories, times) {
  let repeatedCategories = [];
  for (let i = 0; i < times; i++) {
    repeatedCategories = [
      ...repeatedCategories,
      ...categories.map((category) => ({
        ...category,
        id: `${category.id}-${i}`,
      })),
    ];
  }
  return repeatedCategories;
}
