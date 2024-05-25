from flask import Flask, request, jsonify
from flask_cors import CORS
import face_recognition
import numpy as np
import cv2
import base64
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)
CORS(app)

# Database connection configuration
db_config = {
    'host': '127.0.0.1',
    'database': 'face_recognition_db',
    'user': 'root',
    'password': '123456'
}

def create_connection():
    connection = None
    try:
        connection = mysql.connector.connect(**db_config)
        if connection.is_connected():
            return connection
    except Error as e:
        print(f"Error connecting to MySQL: {e}")
    return connection

def decode_base64_image(base64_str):
    img_data = base64.b64decode(base64_str)
    np_arr = np.frombuffer(img_data, np.uint8)
    return cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data['username']
    image_base64 = data['image']

    image = decode_base64_image(image_base64)
    face_encodings = face_recognition.face_encodings(image)
    
    if len(face_encodings) > 0:
        current_face_encoding = face_encodings[0]
        face_encoding_str = ','.join(map(str, current_face_encoding))
        
        connection = create_connection()
        if connection:
            cursor = connection.cursor(dictionary=True)
            try:
                cursor.execute("SELECT username, face_encoding FROM users")
                users = cursor.fetchall()
                
                for user in users:
                    user_face_encoding = np.array(list(map(float, user['face_encoding'].split(','))))
                    match = face_recognition.compare_faces([user_face_encoding], current_face_encoding, tolerance=0.4)
                    if match[0]:
                        return jsonify({"status": "fail", "message": "Scusa, volto già registrato con un altro username // Sorry, face is already registered with another username"}), 400
                
                cursor.execute("INSERT INTO users (username, face_encoding, image) VALUES (%s, %s, %s)", 
                               (username, face_encoding_str, image_base64))
                connection.commit()
                return jsonify({"status": "success", "message": "Utente registrato con successo! // User registered successfully!"}), 200
            except Error as e:
                return jsonify({"status": "fail", "message": f"Database error: {e}"}), 500
            finally:
                cursor.close()
                connection.close()
        else:
            return jsonify({"status": "fail", "message": "Impossibile connettersi al database // Could not connect to the database"}), 500
    else:
        return jsonify({"status": "fail", "message": "Nessun volto rilevato! // No face detected!"}), 400

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    image_base64 = data['image']

    image = decode_base64_image(image_base64)
    face_encodings = face_recognition.face_encodings(image)
    
    if len(face_encodings) > 0:
        current_face_encoding = face_encodings[0]
        
        connection = create_connection()
        if connection:
            cursor = connection.cursor(dictionary=True)
            try:
                cursor.execute("SELECT username, face_encoding FROM users")
                users = cursor.fetchall()
                
                for user in users:
                    user_face_encoding = np.array(list(map(float, user['face_encoding'].split(','))))
                    match = face_recognition.compare_faces([user_face_encoding], current_face_encoding, tolerance=0.4)
                    if match[0]:
                        return jsonify({"status": "success", "message": "Accesso avvenuto con successo! // Access granted successfully!", "username": user['username']}), 200
                
                return jsonify({"status": "fail", "message": "Volto non riconosciuto! // Face not recognized!"}), 401
            except Error as e:
                print(f"Database error: {e}")
                return jsonify({"status": "fail", "message": f"Database error: {e}"}), 500
            finally:
                cursor.close()
                connection.close()
        else:
            print("Could not connect to the database")
            return jsonify({"status": "fail", "message": "Impossibile connettersi al database // Could not connect to the database"}), 500
    else:
        return jsonify({"status": "fail", "message": "Nessun volto rilevato! // No face detected!"}), 400

if __name__ == '__main__':
    app.run(debug=True)