export default function popupWindow(item) {
  console.log(item.id);
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');

  popupContainer.innerHTML = `<div class="popup">
    <a class="close-button">X</a>
    <div class="popup-content">
      <div class="popup-image">
        <h2>${item.name}</h2>
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
        <button type="submit" class="add-comment">Submit</button>
      </div>
    </div>
  </div>`;

  document.querySelector('body').appendChild(popupContainer);

  popupContainer.addEventListener('click', (e) => {
    if (e.target === popupContainer || e.target === popupContainer.querySelector('.close-button')) {
      popupContainer.remove();
    }
  });
}