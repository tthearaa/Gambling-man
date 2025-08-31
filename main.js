const toggleDropdown = (btnId, menuId) => {
  const btn = document.getElementById(btnId);
  const menu = document.getElementById(menuId);

  btn.addEventListener("click", (event) => {
    menu.classList.toggle("show");
    event.stopPropagation();
  });

  window.addEventListener("click", (event) => {
    if (!event.target.closest(".manu-dropdown")) {
      menu.classList.remove("show");
    }
  });
};

