from flask import Flask, render_template, jsonifyimport mysql.connector

connection = mysql.connector.connect(
    host="127.0.0.1",
    port=3306,
    user="weather_user",
    password="weather_password",
    database="weather_db"
)

 
app = Flask(__name__)
 
@app.route("/homepage")
def homepage():
    return render_template("/homepage")
 
@app.route("/login")
def login():
    return render_template("/login")
 
@app.route("/signup")
def signup():
    return render_template("/sinup")
 
if __name__ == "__main__":
    app.run(host="10.32.31.74", port=5000)
 