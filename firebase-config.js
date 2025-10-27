import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

document.getElementById("newPostForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  await addDoc(collection(db, "posts"), { title, content, likes: 0 });
});
