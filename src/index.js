import './style.css';
import { customBinRequestDataURL, likesApiURL } from './modules/strings.js';
import getItemsList from './modules/get_items_list.js';
import popup from './modules/Comment_popup.js';
import addLike from './modules/add_like.js';
import getLikes from './modules/get_like';

let catList = [];
let likesList = [];

window.addEventListener('load', async () => {
  await getItemsList(customBinRequestDataURL).then((list) => {
    catList = list;

    catList.forEach((listItem) => {
      document.querySelector('main').innerHTML += `<div class="card" id="cat-${listItem.id}">
      <img src="${listItem.image}" alt="">
      <div class='card-back-drop'>
        <div class="details">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path fill= "#fff"; d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z"/></svg>    
          <h3>${listItem.name} (${listItem.role})</h3>
          <div class="more">
            <div class="description">${listItem.description}</div>
            <div class="btns">
              <a href='#cat-${listItem.id}'>Like <sup class='likes'>0</sup></a>
              <a href='#comment-${listItem.id}'>Comment</a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    });
  });

  await getLikes(likesApiURL).then((list) => {
    likesList = list;
    likesList.forEach((cat) => {
      document.querySelector(`#${cat.item_id} .likes`).innerHTML = `${cat.likes}`;
    });
  });
});

window.addEventListener('popstate', async () => {
  const hashValue = window.location.hash;

  if (window.location.hash.match('#comment-')) {
    const index = parseInt(hashValue.substring(9), 10);
    popup(catList[index - 1]);
  } else if (window.location.hash.match('#cat-')) {
    const index = parseInt(hashValue.substring(5), 10);
    if (likesList[index - 1]) {
      document.querySelector(`#${likesList[index - 1].item_id} .likes`).classList.add('loader');
      if (await addLike(likesApiURL, hashValue.substring(1))) {
        likesList[index - 1].likes += 1;
      }
      document.querySelector(`#${likesList[index - 1].item_id} .likes`).classList.remove('loader');
      document.querySelector(`#${likesList[index - 1].item_id} .likes`).innerHTML = likesList[index - 1].likes;
    } else {
      console.log(await addLike(likesApiURL, hashValue.substring(1)));
    }
  }
});
