const getLikes = async (url) => {
  const response = await fetch(url);
  if (response.status !== 200) {
    return [];
  }
  const responseJSON = await response.json();
  return responseJSON;
};

export default getLikes;