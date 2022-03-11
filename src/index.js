import './style.css';
import { customBinRequestDataURL, likesApiURL } from './modules/strings.js';
import getItemsList from './modules/get_items_list.js';
import popup from './modules/Comment_popup.js';
import getLikes from './modules/get_like.js';
import addCatsToDOM from './modules/homepage/add_cats_to_dom.js';
import updateLikesInDOM from './modules/homepage/update_likes_in_dom.js';
import addLikeListener from './modules/homepage/add_like_listener.js';

let catList = [];
let likesList = [];

window.addEventListener('load', async () => {
  await getItemsList(customBinRequestDataURL).then((list) => {
    catList = list;
    addCatsToDOM(catList);
  });

  document.querySelector('nav sup').innerHTML = catList.length;

  await getLikes(likesApiURL).then((list) => {
    likesList = list;
    updateLikesInDOM(likesList);
  });
});

window.addEventListener('popstate', async () => {
  const hashValue = window.location.hash;

  if (window.location.hash.match('#comment-')) {
    const index = parseInt(hashValue.substring(9), 10);
    popup(catList[index - 1]);
  } else if (window.location.hash.match('#cat-')) {
    addLikeListener(hashValue, likesList);
  }
});
