import { getFirestore, doc, getDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
const db = getFirestore();

const postId = "post-123"; // شناسه پست
const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

likeBtn.addEventListener("click", async () => {
  const ref = doc(db, "posts", postId);
  await updateDoc(ref, { likes: increment(1) });
  const snap = await getDoc(ref);
  likeCount.textContent = snap.data().likes;
});
