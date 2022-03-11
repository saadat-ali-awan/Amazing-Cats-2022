import commentsImage from '../../assets/Comment_button.png';
import likesImage from '../../assets/Like-button.png';

const addCatsToDOM = (catList) => {
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
            <a href='#cat-${listItem.id}'><img src='${likesImage}'/><sup class='likes'>0</sup></a>
            <a href='#comment-${listItem.id}'><img src='${commentsImage}'/></a>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  });
};

export default addCatsToDOM;