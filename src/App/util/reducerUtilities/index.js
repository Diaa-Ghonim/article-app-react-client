

export const updateObject = (oldObject, newValue) => {
  return Object.assign({}, oldObject, newValue);
};

export const updateItemInArray = (array, itemId, updateItemCallback) => {
  const updatedItems = array.map(item => {
    if (item.id !== itemId) return item;
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });
  return updatedItems;
};

export function filterArrayById(array, id) {
  return array.filter(item => {
    return item.id !== id
  });
};
