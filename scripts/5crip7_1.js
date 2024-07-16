// Get the last modified date
var lastModified = new Date(document.lastModified);

// Extract month, date, year in English
var month = lastModified.toLocaleString('en-US', { month: 'long' });
var date = lastModified.getDate();
var year = lastModified.getFullYear();

// Extract hours and minutes
var hours = lastModified.getHours();
var minutes = lastModified.getMinutes();

// Convert to 12-hour format
var period = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'

// Format minutes to be two digits
minutes = minutes < 10 ? '0' + minutes : minutes;

// Combine time in 12-hour format
var formattedTime = hours + ':' + minutes + ' ' + period;

// Display in the swapped format with the year and time
document.getElementById('last-updated').textContent = "Updated: " + month + " " + date + ", " + year + " at " + formattedTime;



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