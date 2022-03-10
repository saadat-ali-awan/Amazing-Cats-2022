import { getComments, addComments } from './fetch_comments.js';

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
        <a class="comment-counter">4 Comments</a>
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
  document.querySelector('.comments').innerHTML = `${
    comments.map((comment) => `<div class="comment">
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
    document.querySelector('.comments').innerHTML += `<div class="comment">
    <div class="comment-info">
      <a class="username">${commentUser.value}:</a>
      <p class="time">Created on: ${new Date().getFullYear()}-0${new Date().getMonth() + 1}-0${new Date().getDate()}</p>
    </div>
    <p class="comment-txt">${commentText.value}</p>
  </div>`;

    commentUser.value = '';
    commentText.value = '';
  });

  popupContainer.addEventListener('click', (e) => {
    if (e.target === popupContainer || e.target === popupContainer.querySelector('.close-button')) {
      popupContainer.remove();
    }
  });
}