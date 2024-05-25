document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    const usernameElements = document.getElementsByClassName('username');
    const logoutButton = document.getElementById('logout');
    const isLoggedIn = username !== null;

    if (logoutButton && isLoggedIn) {
        logoutButton.style.display = 'block';
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('username');
            Array.from(usernameElements).forEach(element => {
                element.textContent = ''; 
            });

            alert('Logged out successfully!');
            window.location.href = 'enlogin.html';
        });
    }
    else {
        if (logoutButton) {
            logoutButton.style.display = 'none';
        }
    }
    if (username) {
        Array.from(usernameElements).forEach(element => {
            element.textContent = username;
        });
    } else {
        if (window.location.pathname === '/enrestrict.html') {
            alert('Unauthorized access. Please log in.');
            window.location.href = 'enlogin.html';
        } else if (usernameElements.length > 0) {
            Array.from(usernameElements).forEach(element => {
                element.textContent = ''; 
            });
        }
    }
});
