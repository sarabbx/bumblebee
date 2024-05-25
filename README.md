// This project was made by Sara Cuccaro and Enrico Argerola. 

<details>
<summary><h1> Click on me to show screenshots</h1></summary>
<h3>enindex.html</h3>
<img src="https://i.imgur.com/tZGUIIG.png" alt="enindex.html" width="600">

<h3>enabout.html</h3>
<img src="https://i.imgur.com/cxlj43t.png" alt="enabout.html" width="600"><img src="https://i.imgur.com/obYcNOo.png" alt="enabout.html" width="600">

<h3>encontact.html</h3>
<img src="https://i.imgur.com/yCF5DzW.png" alt="encontact.html" width="600">

<h3>enlogin.html</h3>
<img src="https://i.imgur.com/fBnXgaR.png" alt="enlogin.html" width="600">

<h3>enregister.html</h3>
<img src="https://i.imgur.com/0LJTYl1.png" alt="enregister.html" width="600">

<h3>enrestrict.html</h3>
<img src="https://i.imgur.com/xEtxNgu.png" alt="enrestrict.html" width="600">

</details> 

Libraries to install:

pip install Flask

pip install flask-cors

pip install face_recognition

pip install opencv-python

pip install numpy

pip install mysql-connector-python

If you haven't already installed MySQL, download and install it from the official MySQL website.

Open MySQL Workbench and connect to your MySQL server using the appropriate credentials.

If the credentials in the app.py file differ from those you wish to use for connecting to the MySQL database, 
you can modify them directly in the Python code. 

You can use the schema database.mwb.bak, or make one yourself:

CREATE DATABASE face_recognition_db;

USE face_recognition_db;

CREATE TABLE users 
(
    username VARCHAR(50) PRIMARY KEY,
    face_encoding TEXT NOT NULL,
    image LONGBLOB NOT NULL
);

Make sure you synchronize the model on MySQL Workbench!

Go to the directory where the file app.py is saved ex: "cd bumblebee", and run the command:

python app.python 

In the same directory but in a new tab, run the command:

python -m http.server 8000

Go to:
http://localhost:8000/enindex.html

// Questo progetto è stato realizzato da Sara Cuccaro e Enrico Argerola.

<details>
<summary><h1> Cliccami per visualizzare gli screenshot</h1></summary>
<h3>itindex.html</h3>
<img src="https://i.imgur.com/apbv5Au.png" alt="itindex.html" width="600">

<h3>itabout.html</h3>
<img src="https://i.imgur.com/ZMytE9w.png" alt="itabout.html" width="600"><img src="https://i.imgur.com/6ZReL9v.png" alt="itabout.html" width="600">

<h3>itcontact.html</h3>
<img src="https://i.imgur.com/8QRbNTu.png" alt="itcontact.html" width="600">

<h3>itlogin.html</h3>
<img src="https://i.imgur.com/scqOOkd.png" alt="itlogin.html" width="600">

<h3>itregister.html</h3>
<img src="https://i.imgur.com/SetAZ6X.jpeg" alt="itregister.html" width="600">

<h3>itrestrict.html</h3>
<img src="https://i.imgur.com/LfoNjcG.png" alt="itrestrict.html" width="600">

</details> 

Librerie da installare:

pip install Flask

pip install flask-cors

pip install face_recognition

pip install opencv-python

pip install numpy

pip install mysql-connector-python

Se non hai già installato MySQL, scaricalo e installalo dal sito ufficiale di MySQL.

Apri MySQL Workbench e connettiti al tuo server MySQL usando le credenziali appropriate.

Se le credenziali nel file app.py sono diverse da quelle che desideri utilizzare per la connessione al database MySQL, 
puoi modificarle direttamente nel codice Python. 

Puoi utilizzare lo schema database.mwb.bak, oppure crearne uno tu stesso:

CREATE DATABASE face_recognition_db;

USE face_recognition_db;

CREATE TABLE users 
(
    username VARCHAR(50) PRIMARY KEY,
    face_encoding TEXT NOT NULL,
    image LONGBLOB NOT NULL
);

Assicurati di sincronizzare il tuo database su MySQL Workbench!

Andando nella directory dove si trova il nostro file app.py  ex: "cd bumblebee", digita il comando

python app.python 

Nella stessa directory, in un'altra shell digita questo comando

python -m http.server 8000

e naviga all'indirizzo
http://localhost:8000/itindex.html






