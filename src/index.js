import './style.css';
import popup from './modules/Comment_popup.js';

const ABtns = Array.from(document.getElementsByClassName('btn'));

ABtns.forEach((e, i) => {
  e.addEventListener('click', () => popup(i));
});