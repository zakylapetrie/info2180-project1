/* Add your JavaScript to this file */
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add Form
    const form = document.querySelector('.newsletter form');
    // Event listener for form 
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Get the email input field and message div
        const emailInput = document.getElementById('email');
        const messageDiv = document.querySelector('.message');
        
        const email = emailInput.value.trim();
        
        // Check if email is empty
        if (email === '') {
            messageDiv.textContent = 'Please enter a valid email address.';
        } else {
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        }
    });
});