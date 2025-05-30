document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('toggle-dark');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (toggle) toggle.textContent = '☀️ Light Mode';
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-mode');
      toggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
});
