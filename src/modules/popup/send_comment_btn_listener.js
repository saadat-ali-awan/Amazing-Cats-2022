import { addComments } from '../fetch_comments.js';

const sendCommentBtnListener = (item, numComments) => {
  document.querySelector('.add-comment-btn').addEventListener('click', () => {
    const commentUser = document.querySelector('.username-input');
    const commentText = document.querySelector('.comment-input');

    if (commentText.value === '' || commentUser.value === '') {
      return;
    }

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
    </div>
    <p class="comment-txt">${commentText.value}</p>
    <p class="time">${new Date().getFullYear()}-${month}-${day}</p>`;

    commentsDiv.prepend(newElem);

    numComments += 1;
    document.querySelector('.comment-counter').innerHTML = `${numComments} Comments`;

    commentUser.value = '';
    commentText.value = '';
    commentsDiv.scrollTop = 0;
  });
};

export default sendCommentBtnListener;