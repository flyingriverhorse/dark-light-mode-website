document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.getElementById('themeSwitch');
    const toggleIcon = document.getElementById('toggle-icon');
    const navbar = document.getElementById('navbar');
  
    // Check localStorage for saved theme or default to light mode
    let theme = localStorage.getItem('theme') || 'light';
    setTheme(theme);
    
    themeSwitch.addEventListener('change', function() {
      theme = this.checked ? 'dark' : 'light';
      setTheme(theme);
      localStorage.setItem('theme', theme);
    });
    
    function setTheme(theme) {
      if (theme === 'dark') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        // Update navbar classes for dark mode
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
        // Update toggle text and icon
        toggleIcon.querySelector('.toggle-text').textContent = 'Dark Mode';
        toggleIcon.querySelector('i').classList.remove('fa-sun');
        toggleIcon.querySelector('i').classList.add('fa-moon');
        themeSwitch.checked = true;
      } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        // Update navbar classes for light mode
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
        toggleIcon.querySelector('.toggle-text').textContent = 'Light Mode';
        toggleIcon.querySelector('i').classList.remove('fa-moon');
        toggleIcon.querySelector('i').classList.add('fa-sun');
        themeSwitch.checked = false;
      }
    }
  });
  