const signInButton = document.getElementById('signInButton');
const passwordInput = document.getElementById('password');
const errorElement = document.getElementById('password-error');

function validatePassword() {
    var password = passwordInput.value;

    // Reset error message
    errorElement.textContent = '';

    // Check if the password is at least 8 characters long and not more than 12 characters
    if (password.length < 8 || password.length > 12) {
        errorElement.textContent += 'Password must be between 8 and 12 characters long. ';
    }

    // Check if the password contains at least two lowercase letters
    if ((password.match(/[a-z]/g) || []).length < 2) {
        errorElement.textContent += 'Password must contain at least two lowercase letters. ';
    }

    // Check if the password contains at least two uppercase letters
    if ((password.match(/[A-Z]/g) || []).length < 2) {
        errorElement.textContent += 'Password must contain at least two uppercase letters. ';
    }

    // Check if the password contains at least one digit
    if (!/\d/.test(password)) {
        errorElement.textContent += 'Password must contain at least one digit. ';
    }

    // Check if the password contains at least one special character
    if (!/[!@#$%^&*()_+]/.test(password)) {
        errorElement.textContent += 'Password must contain at least one special character (!@#$%^&*()_+). ';
    }

    // Return true if there are no error messages, indicating the password is valid
    return errorElement.textContent === '';
}

// Hook up the redirection to the YouTube link on button click
signInButton.addEventListener('click', function () {
    // Validate the password
    const isPasswordValid = validatePassword();

    // If the password is valid, redirect to the YouTube channel link
    if (isPasswordValid) {
        window.location.href = 'https://www.youtube.com/channel/UCzB3wiBevx1lkNISLihQzVw';
    }
});
