import csv
from flask import Flask, jsonify
import pandas as pd
import numpy as np

app = Flask(__name__)

bronx_df = pd.read_csv("static/Bronx_Combined.csv")
kings_df = pd.read_csv("static/Kings_Combined.csv")
ny_df = pd.read_csv("static/NY_combined.csv")
queens_df = pd.read_csv("static/Queens_Combined.csv")
richmond_df = pd.read_csv("static/RichMond_Combined.csv")

def coordinates_data(file_name):
    coordinates = []
    csv_path = "./static/"+file_name
    df = pd.read_csv(csv_path)

    for ind,row in df.iterrows():

        latitude = float(row['Latitude'])
        longitude = float(row['Longitude'])
        coordinates.append([latitude,longitude])

    return coordinates

#!####################################################### Bronx
@app.route('/coordinates/bronx', methods=['GET'])
def get_bronx_coordinates():

    try:
        coordinates = coordinates_data(file_name="Bronx_Combined.csv")
        return jsonify({"coordinates": coordinates})
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/coordinates/bronx_epicenters', methods=['GET'])
def get_bronx_epicenters():
    try:
        return jsonify({'1':[40.85201548282162,-73.8473937253811,35052.89],'2':[40.85188213796728,-73.85451256281453,24797.01],'3':[40.84489456629439,-73.85947729300842,17638.50]})
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/metrics/bronx', methods=['GET'])
def get_bronx_metrics():
    try:
        return jsonify({'Mean_Poplation':bronx_df['TotalPop'].mean(),"Mean_Income":bronx_df['Income'].mean(),"Mean_PerCapIncome" : bronx_df['IncomePerCap'].mean()})
    except Exception as e:
        return jsonify({"error": str(e)})

############################################################! Kings
@app.route('/coordinates/kings', methods=['GET'])
def get_kings_coordinates():

    try:
        coordinates = coordinates_data(file_name="Kings_Combined.csv")
        return jsonify({"coordinates": coordinates})
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/coordinates/kings_epicenters', methods=['GET'])
def get_kings_epicenters():
    try:
        return jsonify([[40.63990667624286,-73.95640703517857,75455.21],[40.62653266331572,-73.95685929648143,34282.58],[40.626758793971675,-73.94574120603501,27662.36],[40.63716080401786,-73.94719221105713,20353.39]])
    except Exception as e:
        return jsonify({"error": str(e)})


@app.route('/metrics/kings', methods=['GET'])
def get_kings_metrics():
    try:
        return jsonify({'Mean_Poplation':kings_df['TotalPop'].mean(),"Mean_Income":kings_df['Income'].mean(),"Mean_PerCapIncome" : kings_df['IncomePerCap'].mean()})
    except Exception as e:
        return jsonify({"error": str(e)})

#######################################################! NY
@app.route('/coordinates/ny', methods=['GET'])
def get_ny_coordinates():
    try:
        coordinates = coordinates_data(file_name="NY_combined.csv")
        return jsonify({"coordinates": coordinates})
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/coordinates/ny_epicenters', methods=['GET'])
def get_ny_epicenters():
    try:
        return jsonify([[40.75927135678095,-73.97630653266427,128381.28],[40.76896531839999,-73.97312216821803,96368.44],[40.7661494974875,-73.97429962312083,41985.54],[40.775308173522454,-73.9681335247653,30915.40]])
    except Exception as e:
        return jsonify({"error": str(e)})


@app.route('/metrics/ny', methods=['GET'])
def get_ny_metrics():
    try:
        return jsonify({'Mean_Poplation':ny_df['TotalPop'].mean(),"Mean_Income":ny_df['Income'].mean(),"Mean_PerCapIncome" : ny_df['IncomePerCap'].mean()})
    except Exception as e:
        return jsonify({"error": str(e)})

#########################################################! Queen
@app.route('/coordinates/queens', methods=['GET'])
def get_queens_coordinates():

    try:
        coordinates = coordinates_data(file_name="Queens_Combined.csv")
        return jsonify({"coordinates": coordinates})
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/coordinates/queens_epicenters', methods=['GET'])
def get_queens_epicenters():
    try:
        return jsonify([[40.75927135678095,-73.97630653266427,128381.28],[40.76896531839999,-73.97312216821803,96368.44],[40.7661494974875,-73.97429962312083,41985.54],[40.775308173522454,-73.9681335247653,30915.40]])
    except Exception as e:
        return jsonify({"error": str(e)})


@app.route('/metrics/queens', methods=['GET'])
def get_queens_metrics():
    try:
        return jsonify({'Mean_Poplation':queens_df['TotalPop'].mean(),"Mean_Income":queens_df['Income'].mean(),"Mean_PerCapIncome" : queens_df['IncomePerCap'].mean()})
    except Exception as e:
        return jsonify({"error": str(e)})

#####################################################! Richmond
@app.route('/coordinates/richmond', methods=['GET'])
def get_richmond_coordinates():

    try:
        coordinates = coordinates_data(file_name="Sandwhiches_Orders.csv")
        return jsonify({"coordinates": coordinates})
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/coordinates/richmond_epicenters', methods=['GET'])
def get_richmond_epicenter():

    try:
        return jsonify([[40.56391959798148,-74.11338358458518,45098.70],[40.546950825553566,-74.13380653266071,40010.82],[40.56366834170247,-74.13929648241606,38060.22],[40.5642481639,-74.12528024738461,30022.48],[40.5571670854375,-74.399120603,29935.25],[40.56925509902353,-74.14740762636471,18063.70]])
    except Exception as e:
        return jsonify({"error": str(e)})


@app.route('/metrics/richmond', methods=['GET'])
def get_richmond_metrics():
    try:
        return jsonify({'Mean_Poplation':richmond_df['TotalPop'].mean(),"Mean_Income":richmond_df['Income'].mean(),"Mean_PerCapIncome" : richmond_df['IncomePerCap'].mean()})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
