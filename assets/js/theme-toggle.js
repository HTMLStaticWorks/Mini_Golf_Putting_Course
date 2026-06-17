(function () {
  // Read theme immediately to prevent flashing on load
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Read direction immediately to prevent flashing on load
  const savedDir = localStorage.getItem('dir') || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);
})();

document.addEventListener('DOMContentLoaded', () => {
  // Select only the theme toggle buttons (excluding RTL buttons)
  const themeToggleBtns = document.querySelectorAll('.btn-theme-toggle:not(.btn-rtl-toggle)');

  function updateToggleIcon(theme) {
    themeToggleBtns.forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (theme === 'dark') {
          icon.className = 'fas fa-sun';
        } else {
          icon.className = 'fas fa-moon';
        }
      }
    });
  }

  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  updateToggleIcon(currentTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateToggleIcon(newTheme);
    });
  });

  // RTL Toggle logic
  const rtlToggleBtns = document.querySelectorAll('.btn-rtl-toggle');

  function updateRTLStyles(dir) {
    rtlToggleBtns.forEach(btn => {
      if (dir === 'rtl') {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
      btn.style.backgroundColor = '';
      btn.style.color = '';
    });
  }

  const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
  updateRTLStyles(currentDir);

  rtlToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', newDir);
      localStorage.setItem('dir', newDir);
      updateRTLStyles(newDir);
    });
  });
});
