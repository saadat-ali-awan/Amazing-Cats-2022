const getItemsList = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
  });
  const responseJson = await response.json();
  return responseJson;
};

export default getItemsList;