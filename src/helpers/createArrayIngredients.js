export default function createArrayIngredients(data) {
  const ingredients = [];
  const measure = [];
  const ingredientsWithMeasures = [];

  Object.keys(data[0]).forEach((value) => {
    if (value.includes('strIngredient')) {
      ingredients.push(data[0][value]);
    }
    if (value.includes('strMeasure')) {
      measure.push(data[0][value]);
    }
  });
  ingredients.forEach((e, index) => {
    ingredientsWithMeasures.push(`-${e}-${measure[index]}`);
  });

  return ingredientsWithMeasures;
}
