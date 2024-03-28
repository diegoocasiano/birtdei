from flask import Flask, render_template, request, send_from_directory, session
from datetime import datetime
import os
from pyairtable import Api
from flask import redirect, url_for
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from dotenv import load_dotenv
from datetime import datetime

from database import dbConnection
from flask import jsonify


app = Flask(__name__)

#Carga el file .env
load_dotenv('.env') 

#llave secreta para manejar las sessions
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

#ID de la propiedad en Google Analytics 4
ga4_property_id = os.environ.get('GA4_PROPERTY_ID')

#API Key de SendGrid
sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))

#API Key de Airtable
airtableApi = Api(os.environ.get('AIRTABLE_API_KEY'))


@app.route('/')
def inicio():
    
    visited_regalos = session.get('visited_regalos', False)

    if visited_regalos:
        return render_template('index2.html', ga4_property_id=ga4_property_id)
    else:
        return render_template('index1.html', ga4_property_id=ga4_property_id)

@app.route('/inicio')
def inicio_again():
    return render_template('index1.html')


# Nueva función para insertar la edad en la colección "edades"
def insert_edad_db(edad, birth):
    try:
        db = dbConnection("edades-users") 
        edades_collection = db['edades']

        edades_collection.insert_one({'edad': edad, 'birth': birth})
        print(f"Edad {edad} con fecha de cumpleaños {birth} almacenada en la colección 'edades'")

    except Exception as e:
        print(f"Error al almacenar la edad en la colección 'edades': {str(e)}")

@app.route('/ingresando', methods=['POST'])
def procesar_cumple():
    dia = int(request.form['dia'])
    mes = int(request.form['mes'])
    anio = int(request.form['anio']) #2 ultimos digitos
    
    # Si los digitos del año que ingreso el usuario está en el rango de 0-49, se asume que se refiere a 2000
    # Si los digitos del año que ingreso el usuario está en el rango de 50-99, se asume que se refiere a 1900
    if anio >= 0 and anio <= 49:
        anio_completo = 2000 + anio
    else:
        anio_completo = 2000 - (100 - anio)
    print(anio_completo)

    fecha_actual = datetime.now()
    dia_actual = fecha_actual.day
    mes_actual = fecha_actual.month
    año_actual = fecha_actual.year
 

    #Calcular la edad
    edad = fecha_actual.year - anio_completo
    edad = edad - 1

    # Calcula la fecha de cumpleaños para este año
    fecha_cumple = datetime(año_actual, mes, dia)
    birth = datetime(anio_completo, mes, dia).strftime("%Y-%m-%d") # Obtener en formato ISO 8601 (AAAA-MM-DD) y no en el formato predeterminado de Python

    # Usa el próximo año si ya pasó el cumpleaños
    if fecha_cumple < fecha_actual:
        fecha_cumple = datetime(año_actual + 1, mes, dia) 

    # Calcula los días que faltan para el cumpleaños
    dias_para_cumple = (fecha_cumple - fecha_actual).days
    
    session['datos_temporales'] = {'email': None, 'edad': edad, 'birth': birth}

    insert_edad_db(edad, birth)

    # Presentación de templates
    # Importante: Los tenplates nunca deben de renderizarse en la misma ruta donde se procesan los datos ingresados
    # por el usuario, siempre deben de redirigir a otra ruta para renderizar el template
    if dia == dia_actual and mes == mes_actual:
        return redirect('/a{}'.format(edad)) #El {} es para poder pasar la variable edad a la ruta correspondiente
    
    elif 0 <= dias_para_cumple <= 31:
        return redirect('/b{}-{}'.format(edad, dias_para_cumple))
    
    elif 32 <= dias_para_cumple <= 220:
        return redirect('/c{}-{}'.format(edad, dias_para_cumple))
    
    else:
        return redirect('/d{}-{}'.format(edad, dias_para_cumple))



#Renderiza los templates según cuántos días faltan para su cumple
@app.route('/a<int:edad>') #<int:edad> es para poder pasa r la variable edad a la función
def show_s3_1(edad): #edad es la variable que se pasa desde la ruta
    return render_template('s3.1.html', ga4_property_id=ga4_property_id, edad=edad+1) #finalmente se pasa la variable edad al template

@app.route('/b<int:edad>-<int:dias_para_cumple>')
def show_s3_2(edad, dias_para_cumple):
    return render_template('s3.2.html', ga4_property_id=ga4_property_id, edad=edad+1, dias_para_cumple=dias_para_cumple)

@app.route('/c<int:edad>-<int:dias_para_cumple>')
def show_s3_3(edad, dias_para_cumple):
    return render_template('s3.3.html', ga4_property_id=ga4_property_id, edad=edad+1, dias_para_cumple=dias_para_cumple)

@app.route('/d<int:edad>-<int:dias_para_cumple>')
def show_s3_4(edad, dias_para_cumple):
    return render_template('s3.4.html', ga4_property_id=ga4_property_id, edad=edad, dias_para_cumple=dias_para_cumple)


@app.route('/regalos')
def home():
    session['visited_regalos'] = True
    return render_template('home.html', ga4_property_id=ga4_property_id)

@app.route('/enviar-correo', methods=['POST']) 
def enviar_correo():
    if request.method == 'POST': 
        data = request.get_json() #Se obtiene el json que se envía desde el frontend
        email = data.get('email') #Se obtiene el email del json
        names = data.get('names') #Se obtiene el nombre del json

        # Registro de datos en Airtable
        BASE_ID = 'apps6RTIL11SBA533'
        TABLE_NAME = 'Users Waitlist'
        table = airtableApi.table(BASE_ID, TABLE_NAME)

        #Verifica si hay datos temporales en la session antes de insertar en la base de datos
        datos_temporales = session.get('datos_temporales', {})
        birth = datos_temporales.get('birth')
        edad = datos_temporales.get('edad')

        #Si birth no está vacio, se formatea la fecha de nacimiento para obtener el nombre del mes
        if birth is not None:
            birth_datetime = datetime.strptime(birth, "%Y-%m-%d")
            birthMonth = birth_datetime.strftime("%B")
        #Si birth está vacio, se asigna None a birth y birthMonth
        else:
            birthMonth = None
            birth = None
        #Si edad está vacio, se asigna None a edad
        if edad is None:
            edad = None

        #Se crea el nombre de la base de datos en MongoDB
        db = dbConnection("emails-users")
        #Se crea el nombre de la colección en MongoDB
        emails_collection = db['updates-subscription']

        #Insertar en MongoDB
        emails_collection.insert_one({ 'names': names,'email': email, 'birth': birth, 'edad': edad})

        #Insertar en Airtable
        table.create({
            'Names': names,
            'Email': email,
            'Age': edad,
            'Birthday': birth,
            'Birthday Month': birthMonth,
        })
        #Elimina los datos temporales de la session después de insertar en MongoDB y Airtable
        session.pop('datos_temporales', None)

        return jsonify({'message': 'stored form data successfully'})


@app.route('/feedback')

def feedback():
    return render_template('feedback.html', ga4_property_id=ga4_property_id)




def send_email(tipoFeedback, tituloFeedback, detallesFeedback, currentDate):
    message = Mail(
        from_email=("biwerun@gmail.com", "Birtdei"),
        to_emails="dianlonso02@gmail.com",
        subject="Nuevo Feedback",
        html_content=f"<h2>Nuevo Feedback para Birtdei</h2>\n\n<h3>Tipo de feedback:</h3>\n{tipoFeedback}\n\n<h3>Título del feedback:</h3>\n{tituloFeedback}\n\n<h3>Detalles del feedback:</h3>\n{detallesFeedback}\n\n<h3>Fecha y hora:</h3>\n{currentDate}"
    )

    try:
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
        return 'Email sent successfully'
    except Exception as e:
        print(str(e)) 
        return 'Error sending the email'

@app.route('/send_mail', methods=['POST'])
def send_mail():
    if request.method == 'POST':
        data = request.json
        tipoFeedback = data.get('tipoFeedback')
        tituloFeedback = data.get('tituloFeedback')
        detallesFeedback = data.get('detallesFeedback')
        currentDate = datetime.now().strftime("%d-%m-%Y - %H:%M")

        response = send_email(tipoFeedback, tituloFeedback, detallesFeedback, currentDate)
        if response == 'Email sent successfully':
            return ('', 200) 
        else:
            return ('', 500) 


@app.route('/desktop')
def vDesktop():
    return render_template('desktop.html', ga4_property_id=ga4_property_id)

# Ruta para poder cargar archivos desde otro directorio: los componentes de react
@app.route('/react-components/dist/<path:filename>')
def send_react_static(filename):
    return send_from_directory('react-components/dist', filename)

if __name__ == '__main__': 
    app.run(debug=True)

