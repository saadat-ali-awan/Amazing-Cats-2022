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

export default getComments;