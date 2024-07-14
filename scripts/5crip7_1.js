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