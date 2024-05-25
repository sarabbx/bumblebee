// register.js
const video = document.getElementById('video');
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => console.error('Error, camera unavailable! ', err));

let capturedImageBase64 = '';

document.getElementById('capture').addEventListener('click', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    capturedImageBase64 = canvas.toDataURL('image/png').replace('data:image/png;base64,', '');
    console.log('Image captured');
});

document.getElementById('register').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    if (!username || !capturedImageBase64) {
        alert('Capture an image and insert a username!');
        return;
    }
    fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, image: capturedImageBase64 })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from /register:', data);
        if (data.status === 'success') {
            window.location.href = 'enlogin.html';
            alert(data.message);
        } else {
            alert(data.message);
            if (data.message === "Sorry, face is already registered with another username") {
                window.location.href = 'enlogin.html';
            }
        }
    })
    .catch(error => console.error('Errore:', error));
});
