const menu = document.getElementById("icon-menu");
const x = document.getElementById("icon-menu-close");
const overlay = document.getElementById("overlay");
const sidebar = document.querySelector(".sidebar");

const showSidebar = () => {
  sidebar.style.display = "flex";
  overlay.classList.add("active");
};

const hideSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
  overlay.classList.remove("active");
};

menu.addEventListener("click", showSidebar);

x.addEventListener("click", hideSidebar);

menu.addEventListener("keydown", (event) => {
  // Activate on Enter or Space
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault(); // Prevent page scroll on Space
    showSidebar();
  }
});

x.addEventListener("keydown", (event) => {
  // Activate on Enter or Space
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault(); // Prevent page scroll on Space
    hideSidebar();
  }
});
