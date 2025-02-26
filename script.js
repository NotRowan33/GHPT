document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector('.menu-btn');
  const sidebar = document.querySelector('.sidebar');
  const closeBtn = document.querySelector('.close-btn');

  // Open menu
  menuBtn.addEventListener('click', () => {
    sidebar.classList.add('show');
  });

  // Close menu
  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
      sidebar.classList.remove('show');
    }
  });
});
