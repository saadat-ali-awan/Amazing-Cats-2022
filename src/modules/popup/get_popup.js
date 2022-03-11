import closeImage from '../../assets/X_button.png';
import sendButtonImage from '../../assets/Send_button.png';

const getPopup = (item) => `<div class="popup">
    <div class="popup-top-bar">
      <h2>${item.name}</h2>
      <a class="close-button"><img src=${closeImage} /></a>
    </div>
    <div class="popup-content">
      <div class="popup-image">
        <img src="${item.image}"></img>
      </div>
      <div class="popup-comment-section">
        <div class="display-comments">
          <a class="comment-counter">0 Comments</a>
          <div class="comments">
            
          </div>
        </div>
        <div class="add-comment">
        <input type="text" class="comment-input" required placeholder='Comment Meow'/>
          <input type="text" class="username-input" required placeholder='Your Name'/>
          <img class="add-comment-btn" src='${sendButtonImage}'/>
        </div>
      </div>
    </div>
    <div class="popup-txt">
      <h3>Role: ${item.role}</h3>
      <div class='skills-container'><h3>Skills</h3><ul class="skill-list">${item.skils.map((element) => `<li>${element}</li>`).join('')}</ul></div>
      <p>${item.description}</p>
    </div>    
  </div>`;

export default getPopup;