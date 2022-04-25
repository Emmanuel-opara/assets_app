import * as actions from '../action_types';

const handleFavorite = (id, items, isFavorite) => {
  const insert = (arr, index, newItem) => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index),
  ];

  let result = items.find(item => item.id.toString() === id.toString());

  let data = [];

  //get items that will not be affected
  //by the new operation
  let otherItems = items.filter(item => item.id !== id);

  //toggle the isFavorite state
  result.isFavorite = isFavorite ? false : true;

  //get the position of the item for insertion
  let index = items.findIndex(x => x.id === id);

  let newItems = insert(otherItems, index, result);

  return dispatch => {
    dispatch({
      type: actions.HANDLE_ASSETS_FAVORITES,
      data,
      assets: newItems,
    });
  };
};

export default handleFavorite;
