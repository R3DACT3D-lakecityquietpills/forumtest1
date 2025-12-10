// Load forum post list
async function loadForumPosts() {
  const list = document.getElementById("post-list");

  // Placeholder demo data (replace with your API)
  const posts = [
    { id: 1, title: "Welcome!", snippet: "This is your first test thread..." },
    { id: 2, title: "Announcements", snippet: "Important updates will go here." }
  ];

  posts.forEach(p => {
    const card = document.createElement("div");
    card.className = "post-card";
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.snippet}</p>
      <a href="thread.html?id=${p.id}">View Thread →</a>
    `;
    list.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("post-list")) {
    loadForumPosts();
  }
});
