from pymongo import MongoClient
from dotenv import load_dotenv
import certifi
import os

load_dotenv('.env')

MONGO_URI = os.environ.get('MONGO_URI') 
ca = certifi.where()

def dbConnection(database_name):
    try:
        client = MongoClient(MONGO_URI, tlsCAFile=ca)
        db = client[database_name]
    except ConnectionError:
        print("Error de conexión con la base de datos")
    return db

