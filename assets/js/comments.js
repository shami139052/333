function renderComments(comments) {
  const container = document.getElementById("comments");
  container.innerHTML = "";
  comments.forEach(comment => {
    const div = document.createElement("div");
    div.className = "comment";
    div.innerHTML = 
      <p><strong>${comment.user}</strong>: ${comment.text}</p>
      <button onclick="replyTo('${comment.id}')">پاسخ</button>
      <div class="replies">${renderReplies(comment.replies)}</div>
    ;
    container.appendChild(div);
  });
}
