import { getComments, addComments } from './fetch_comments.js';
import CCounter from './comments_counter.js';

export default async function popupWindow(item) {
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');

  popupContainer.innerHTML = `<div class="popup">
    
    <div class="popup-top-bar">
      <h2>${item.name}</h2>
      <a class="close-button">X</a>
    </div>
    <div class="popup-content">
      <div class="popup-image">
        <img src="${item.image}"></img>
      </div>
      <div class="popup-txt">
        <h3>${item.role}</h3>
        <ul class="skill-list">${item.skils.map((element) => `<li>${element}</li>`).join('')}</ul>
        <p>${item.description}</p>
      </div>
    </div>
    <div class="popup-comment-section">
      <div class="display-comments">
        <a class="comment-counter">0 Comments</a>
        <div class="comments">
          
        </div>
      </div>
      <div class="add-comment">
        <input type="text" class="username-input"></input>
        <input type="text" class="comment-input"></input>
        <button type="submit" class="add-comment-btn">Comment</button>
      </div>
    </div>
  </div>`;

  document.querySelector('body').appendChild(popupContainer);

  const comments = await getComments(item.id);
  let numComments = CCounter(comments);
  document.querySelector('.comment-counter').innerHTML = `${numComments} Comments`;
  document.querySelector('.comments').innerHTML = `${
    comments.slice().reverse().map((comment) => `<div class="comment">
    <div class="comment-info">
      <a class="username">${comment.username}:</a>
      <p class="time">Created on: ${comment.creation_date}</p>
    </div>
    <p class="comment-txt">${comment.comment}</p>
  </div>`).join('')}`;

  document.querySelector('.add-comment-btn').addEventListener('click', () => {
    const commentUser = document.querySelector('.username-input');
    const commentText = document.querySelector('.comment-input');

    addComments(`cat-${item.id}`, commentUser.value, commentText.value);
    const commentsDiv = document.querySelector('.comments');
    const newElem = document.createElement('div');
    newElem.classList.add('comment');

    let month = 0;
    if (new Date().getMonth() + 1 < 10) {
      month = `0${new Date().getMonth() + 1}`;
    } else {
      month = new Date().getMonth() + 1;
    }

    let day = 0;
    if (new Date().getDate() < 10) {
      day = `0${new Date().getDate()}`;
    } else {
      day = new Date().getDate();
    }

    newElem.innerHTML += `
    <div class="comment-info">
      <a class="username">${commentUser.value}:</a>
      <p class="time">Created on: ${new Date().getFullYear()}-${month}-${day}</p>
    </div>
    <p class="comment-txt">${commentText.value}</p>`;

    commentsDiv.prepend(newElem);

    numComments += 1;
    document.querySelector('.comment-counter').innerHTML = `${numComments} Comments`;

    commentUser.value = '';
    commentText.value = '';
    commentsDiv.scrollTop = 0;
  });

  popupContainer.addEventListener('click', (e) => {
    if (e.target === popupContainer || e.target === popupContainer.querySelector('.close-button')) {
      popupContainer.remove();
    }
  });
}