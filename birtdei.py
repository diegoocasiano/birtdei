from flask import Flask, render_template, request, send_from_directory
from datetime import datetime
import os

app = Flask(__name__)

@app.route('/')
def inicio():
    return render_template('index.html')

@app.route('/ingreso')
def birthday():
    return render_template('s2_form.html')

@app.route('/ingreso2', methods=['POST'])
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
    
    # Calcula los días que faltan para el cumpleaños
    dias_para_cumple = (fecha_cumple - fecha_actual).days
    
    # Presentación de templates
    if dia == dia_actual and mes == mes_actual:
        return render_template('s3.1.html', edad=edad)
    
    elif 0 <= dias_para_cumple <= 31:
        return render_template('s3.2.html', edad=edad, dias_para_cumple=dias_para_cumple)
    
    elif 32 <= dias_para_cumple <= 220:
        return render_template('s3.3.html', edad=edad, dias_para_cumple=dias_para_cumple)
    
    else:
        return render_template('s3.4.html', edad=edad, dias_para_cumple=dias_para_cumple)

@app.route('/regalos')
def home():
    return render_template('home.html')


if __name__ == '__main__':
    app.run(debug=True)
