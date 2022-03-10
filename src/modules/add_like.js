const addLike = async (url, itemId) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 201) {
    const responseJson = await response.text();
    if (responseJson === 'Created') {
      return true;
    }
  }
  return false;
};

export default addLike;