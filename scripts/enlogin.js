// login.js
const video = document.getElementById('video');
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');




document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    if (username) {
        alert('You are already logged in as ' + username + '. Log out before accessing with another account!');
        
        return;
    }

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            console.error('Error, camera unavailable! ', err);
           
        });
});

let capturedImageBase64 = '';

document.getElementById('login').addEventListener('click', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    capturedImageBase64 = canvas.toDataURL('image/png').replace('data:image/png;base64,', '');
    console.log('Image captured.');

    if (!capturedImageBase64) {
        alert('Please capture an image.');
        return;
    }
    fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image: capturedImageBase64 })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from /login:', data);
        if (data.status === 'success') {
            alert(data.message);
            localStorage.setItem('username', data.username);
            window.location.href = 'enrestrict.html'; 
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error('Errore:', error));
});
