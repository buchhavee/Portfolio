document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const closeMenu = document.querySelector(".close-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuItems = document.querySelectorAll(".mobile-menu-item");
  const menuIcon = document.querySelector(".menu-toggle .menu-icon");

  function toggleMenu() {
    mobileMenu.classList.toggle("active");
    menuIcon.classList.toggle("close-icon");
  }

  menuToggle.addEventListener("click", toggleMenu);
  closeMenu.addEventListener("click", toggleMenu);

  mobileMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      menuIcon.classList.remove("close-icon");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target) && mobileMenu.classList.contains("active")) {
      toggleMenu();
    }
  });
});
