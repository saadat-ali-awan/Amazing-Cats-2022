import { getComments } from './fetch_comments.js';
import CCounter from './comments_counter.js';
import getPopup from './popup/get_popup.js';
import getCommentsBody from './popup/get_comments_body.js';
import sendCommentBtnListener from './popup/send_comment_btn_listener.js';
import closeBtnListener from './popup/close_btn_listener.js';

export default async function popupWindow(item) {
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');

  popupContainer.innerHTML = getPopup(item);

  document.querySelector('body').appendChild(popupContainer);

  const comments = await getComments(item.id);
  const numComments = CCounter(comments);
  document.querySelector('.comment-counter').innerHTML = `${numComments} Comments`;
  document.querySelector('.comments').innerHTML = getCommentsBody(comments);

  sendCommentBtnListener(item, numComments);

  closeBtnListener(popupContainer);
}