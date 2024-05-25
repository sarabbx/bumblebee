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

Go to the directory where the file app.py is saved "cd bumblebee\site", and run the command:

python app.python 

In the same directory but in a new tab, run the command:

python -m http.server 8000

Go to:
http://localhost:8000/enindex.html

//

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
CREA DATABASE face_recognition_db;
UTILIZZA face_recognition_db;
CREA TABELLA utenti 
(
    nome_utente VARCHAR(50) PRIMARY KEY,
    codifica_viso TESTO NON NULLA,
    immagine BLOB LUNGA NON NULLA
);

Assicurati di sincronizzare il tuo database su MySQL Workbench!

Andando nella directory dove si trova il nostro file app.py "cd bumblebee\site", digita il comando

python app.python 

Nella stessa directory, in un'altra shell digita questo comando

python -m http.server 8000

e naviga all'indirizzo
http://localhost:8000/itindex.html






