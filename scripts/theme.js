document.addEventListener('DOMContentLoaded', (event) => {
    const toggle = document.getElementById('darkmode-toggle');

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        if (savedTheme === 'darkTheme') {
            toggle.checked = true;
        }
    }

    // Listen for toggle change
    toggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('darkTheme');
            localStorage.setItem('theme', 'darkTheme');
        } else {
            document.body.classList.remove('darkTheme');
            localStorage.setItem('theme', 'lightTheme');
        }
    });
});