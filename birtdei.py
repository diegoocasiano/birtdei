from flask import Flask, render_template, request, send_from_directory, session
from datetime import datetime
import os
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



@app.route('/')
def inicio():
    
    visited_regalos = session.get('visited_regalos', False)
    print(f'Visitó regalos?: {visited_regalos}')

    if visited_regalos:
        return render_template('index2.html')
    else:
        return render_template('index1.html')

@app.route('/inicio')
def inicio_again():
    return render_template('index1.html')

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

    fecha_actual = datetime.now()
    dia_actual = fecha_actual.day
    mes_actual = fecha_actual.month

    #Calcular la edad
    edad = fecha_actual.year - anio_completo

    # Calcula la fecha de cumpleaños para este año
    fecha_cumple = datetime(fecha_actual.year, mes, dia)

    # Usa el próximo año si ya pasó el cumpleaños
    if fecha_cumple < fecha_actual:
        fecha_cumple = datetime(fecha_actual.year + 1, mes, dia) 

    # Formatea la fecha de cumpleaños Day/Month/Year
    fecha_cumple_formateada = fecha_cumple.strftime("%d/%m/%Y")

    # Calcula los días que faltan para el cumpleaños
    dias_para_cumple = (fecha_cumple - fecha_actual).days
    
    session['datos_temporales'] = {'email': None, 'fecha_cumple': fecha_cumple_formateada, 'edad': edad}

    # Presentación de templates
    if dia == dia_actual and mes == mes_actual:
        return render_template('s3.1.html', edad=edad)
    
    elif 0 <= dias_para_cumple <= 31:
        return render_template('s3.2.html', edad=edad, dias_para_cumple=dias_para_cumple)
    
    elif 32 <= dias_para_cumple <= 220:
        return render_template('s3.3.html', edad=edad+1, dias_para_cumple=dias_para_cumple)
    
    else:
        return render_template('s3.4.html', edad=edad, dias_para_cumple=dias_para_cumple)

@app.route('/regalos')
def home():
    session['visited_regalos'] = True
    return render_template('home.html')

@app.route('/enviar-correo', methods=['POST']) 
def enviar_correo():
    if request.method == 'POST': 
        data = request.get_json() #Se obtiene el json que se envía desde el frontend
        email = data.get('email') #Se obtiene el email del json

        #Verifica si hay datos temporales en la session antes de insertar en la base de datos
        datos_temporales = session.get('datos_temporales', {})
        fecha_cumple_formateada = datos_temporales.get('fecha_cumple')
        edad = datos_temporales.get('edad')

        db = dbConnection("emails-users") #Se crea el nombre de la base de datos 
        emails_collection = db['updates-subscription'] #Se crea el nombre de la colección
        
        if fecha_cumple_formateada and edad:
            emails_collection.insert_one({'email': email, 'fecha_cumple': fecha_cumple_formateada, 'edad': edad})

            session.pop('datos_temporales', None) #Elimina los datos temporales de la session después de insertar en la base de datos

        else:
            emails_collection.insert_one({'email': email}) #Se inserta el email en la colección

        return jsonify({'message': 'stored email successfully'})


@app.route('/feedback')
def feedback():
    return render_template('feedback.html')


sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))

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

@app.route('/error')
def vDesktop():
    return render_template('desktop.html')

# Ruta para poder cargar archivos desde otro directorio: los componentes de react
@app.route('/react-components/dist/<path:filename>')
def send_react_static(filename):
    return send_from_directory('react-components/dist', filename)

if __name__ == '__main__': 
    app.run(debug=True)
