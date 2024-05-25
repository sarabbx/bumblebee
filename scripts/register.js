// register.js
const video = document.getElementById('video');
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => console.error('Errore, impossibile accedere alla webcam: ', err));

let capturedImageBase64 = '';

document.getElementById('capture').addEventListener('click', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    capturedImageBase64 = canvas.toDataURL('image/png').replace('data:image/png;base64,', '');
    console.log('Immagine scattata');
});

document.getElementById('register').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    if (!username || !capturedImageBase64) {
        alert('Scatta una foto e inserisci il tuo username!');
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
            window.location.href = 'itlogin.html';
            alert(data.message);
        } else {
            alert(data.message);
            if (data.message === "Scusa, volto già registrato con un altro username") {
                window.location.href = 'itlogin.html';
            }
        }
    })
    .catch(error => console.error('Errore:', error));
});
