document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.getElementById('themeSwitch');
    const toggleIcon = document.getElementById('toggle-icon');
  
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
        // Update toggle text and icon
        toggleIcon.querySelector('.toggle-text').textContent = 'Dark Mode';
        toggleIcon.querySelector('i').classList.remove('fa-sun');
        toggleIcon.querySelector('i').classList.add('fa-moon');
        themeSwitch.checked = true;
      } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        toggleIcon.querySelector('.toggle-text').textContent = 'Light Mode';
        toggleIcon.querySelector('i').classList.remove('fa-moon');
        toggleIcon.querySelector('i').classList.add('fa-sun');
        themeSwitch.checked = false;
      }
    }
  });
  