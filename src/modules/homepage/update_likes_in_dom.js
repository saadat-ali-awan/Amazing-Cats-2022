const updateLikesInDOM = (likesList) => {
  likesList.forEach((cat) => {
    document.querySelector(`#${cat.item_id} .likes`).innerHTML = `${cat.likes}`;
  });
};

export default updateLikesInDOM;