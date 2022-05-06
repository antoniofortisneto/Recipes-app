export default function createItemFavorite(type, data) {
  const item = {
    id: type === 'foods' ? data[0].idMeal : data[0].idDrink,
    type: type === 'foods' ? 'food' : 'drink',
    nationality: type === 'foods' ? data[0].strArea : '',
    category: data[0].strCategory,
    alcoholicOrNot: type === 'drinks' ? data[0].strAlcoholic : '',
    name: type === 'foods' ? data[0].strMeal : data[0].strDrink,
    image: type === 'foods' ? data[0].strMealThumb : data[0].strDrinkThumb,
  };

  return item;
}
