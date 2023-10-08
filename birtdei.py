from flask import Flask, render_template, request
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/ingreso')
def birthday():
    return render_template('s2.html')

@app.route('/ingreso2', methods=['POST'])
def procesar_cumple():
    dia = int(request.form['dia'])
    mes = int(request.form['mes'])

    fecha_actual = datetime.now()
    dia_actual = fecha_actual.day
    mes_actual = fecha_actual.month

    # Calcula la fecha de cumpleaños para este año
    fecha_cumple = datetime(fecha_actual.year, mes, dia)
    print(fecha_cumple)

    # Usa el próximo año si ya pasó el cumpleaños
    if fecha_cumple < fecha_actual:
        fecha_cumple = datetime(fecha_actual.year + 1, mes, dia) 
    
    # Calcula la diferencia en días hasta el cumpleaños
    diferencia_dias = (fecha_cumple - fecha_actual).days
    print(diferencia_dias)

    # Presentación de templates
    if dia == dia_actual and mes == mes_actual:
        return render_template('s3.1.html')
    
    elif 0 <= diferencia_dias <= 31:
        return render_template('s3.2.html')
    
    elif 32 <= diferencia_dias <= 220:
        return render_template('s3.3.html')
    
    else:
        return render_template('s3.4.html')
    
    
if __name__ == '__main__':
    app.run(debug=True)