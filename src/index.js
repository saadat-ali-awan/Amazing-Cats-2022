import './style.css';
import { customBinRequestDataURL } from './modules/strings.js';
import getItemsList from './modules/get_items_list.js';
import popup from './modules/Comment_popup.js';

let catList = [];

// catList.forEach((element) => {
//   document.querySelector('main').innerHTML += `
//   <div id="${element.id}">
//     <img src="${element.image}" class='cat-image'>
//     <h3>${element.name}</h3>
//     <p class='description'>${element.description}</p>
//     <ul>${element.skils.map((skill) => `<li>${skill}</li>`).join('')}</ul>
//     <p class='cat-role'>${element.role}</p>
//     <div class='btns'><button>Like</button><button>Comment</button></div>
//   </div>`;
// });

getItemsList(customBinRequestDataURL).then((list) => {
  catList = list;

  catList.forEach((listItem) => {
    document.querySelector('main').innerHTML += `
    <div id="cat-${listItem.id}">
      <img src="${listItem.image}" class='cat-image'>
      <h3>${listItem.name}</h3>
      <p class='description'>${listItem.description}</p>
      <ul>${listItem.skils.map((skill) => `<li>${skill}</li>`).join('')}</ul>
      <p class='cat-role'>${listItem.role}</p>
      <div class='btns'><button>Like</button><button class='comment-btn'>Comment</button></div>
    </div>`;

    document.querySelector(`#cat-${listItem.id} .comment-btn`).addEventListener('click', () => {
      popup(listItem);
    });
  });
});
