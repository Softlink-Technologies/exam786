// Store the user's name in a variable
let name = "";

// Add an event listener to the form submit button
document.querySelector('form').addEventListener('submit', function(e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the user's name from the input field
    name = document.querySelector('#name').value;

    // Redirect the user to the exam page
    window.location.href = 'exam.html';
});
