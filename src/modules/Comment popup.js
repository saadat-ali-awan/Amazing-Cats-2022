export default async function popupWindow() {
  const main = document.querySelector('main');
  const popup = document.createElement('div');
  popup.classList.add('popup-container');

  popup.innerHTML = `<div class="popup">
    <div class="popup-image">
      <a class="close-button">X</a>
    </div>
    <div class="popup-txt">
      <h2>Catname</h2>
      <h3>CatSkill</h3>
      <p>Catdescription</p>
    </div>
  </div>`;

  main.appendChild(popup);
}