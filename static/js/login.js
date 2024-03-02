function authUser() {
    let username = document.getElementById('input_username').value;
    let password = document.getElementById('input_password').value;

    fetch('http://127.0.0.1:3000/api/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to login');
        }
        return response.json();
    })
    .then(data => {
        if (data && data.message === "Incorrect username or password") {
            throw new Error('Incorrect username or password');
        }
        const user = data.message;
        const token = data.token;
        localStorage.setItem('request_user', JSON.stringify(user));
        window.location.href = 'index.html';
    })
    .catch(error => {
        console.error('Failed to login:', error);
        // Show error message to the user as an alert
        alert('Incorrect username or password. Please try again.');
    });
}
