import { commentApiULR as url } from './strings.js';

const getComments = async (id) => {
  const response = await fetch(`${url}?item_id=cat-${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 200) {
    const responseJson = await response.json();
    return responseJson;
  }

  return [];
};

const addComments = async (id, inputUser, inputComment) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: inputUser,
      comment: inputComment,
    }),
  });
  if (response.status !== 201) {
    return false;
  } return true;
};

export { getComments, addComments };