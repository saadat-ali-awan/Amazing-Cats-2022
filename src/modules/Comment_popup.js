export default function popupWindow(item) {
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');

  popupContainer.innerHTML = `<div class="popup">
    <div class="popup-image">
    <img src="${item.image}"></img>
      <a class="close-button">X</a>
    </div>
    <div class="popup-txt">
      <h2>${item.name}</h2>
      <h3>${item.role}</h3>
      <ul class="skill-list">${item.skils.map((element) => `<li>${element}</li>`).join('')}</ul>
      <p>${item.description}</p>
    </div>
  </div>`;

  document.querySelector('body').appendChild(popupContainer);

  popupContainer.addEventListener('click', (e) => {
    if (e.target === popupContainer || e.target === popupContainer.querySelector('.close-button')) {
      popupContainer.remove();
    }
  });
}