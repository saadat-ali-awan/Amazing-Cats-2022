const getLikes = async (url) => {
  const response = await fetch(url);
  const responseJSON = await response.json();
  return responseJSON;
};

export default getLikes;