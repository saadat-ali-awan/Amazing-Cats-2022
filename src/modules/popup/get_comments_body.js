const getCommentsBody = (comments) => `${
  comments.slice().reverse().map((comment) => `<div class="comment">
  <div class="comment-info">
    <a class="username">${comment.username}:</a>
  </div>
  <p class="comment-txt">${comment.comment}</p>
  <p class="time">${comment.creation_date}</p>
</div>`).join('')}`;

export default getCommentsBody;