const ItemsCounter = (list) => {
  if (list !== undefined) {
    return list.length;
  }
  throw new Error('Undefined Array Passed');
};

export default ItemsCounter;