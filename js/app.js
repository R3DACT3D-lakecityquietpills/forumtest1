async function loadComponent(id, path) {
  const html = await fetch(path).then(r => r.text());
  document.getElementById(id).innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", "components/navbar.html");
  loadComponent("footer", "components/footer.html");
});
