import addLike from '../add_like.js';
import { likesApiURL } from '../strings.js';

const addLikeListener = async (hashValue, likesList) => {
  const index = parseInt(hashValue.substring(5), 10);
  if (likesList[index - 1]) {
    document.querySelector(`#${likesList[index - 1].item_id} .likes`).classList.add('loader');
    if (await addLike(likesApiURL, hashValue.substring(1))) {
      likesList[index - 1].likes += 1;
    }
    document.querySelector(`#${likesList[index - 1].item_id} .likes`).classList.remove('loader');
    document.querySelector(`#${likesList[index - 1].item_id} .likes`).innerHTML = likesList[index - 1].likes;
  } else {
    await addLike(likesApiURL, hashValue.substring(1));
  }
};

export default addLikeListener;