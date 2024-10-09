// This script can handle the form submission and other functionalities.
// For now, it's kept simple to avoid complexities.
document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        alert('Login Successful!');
        // You can handle login authentication here.
    } else {
        alert('Please fill in all fields.');
    }
});
