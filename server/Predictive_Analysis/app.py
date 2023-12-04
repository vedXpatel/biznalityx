import csv
from flask import Flask, jsonify
import pandas as pd
import numpy as np

app = Flask(__name__)

def coordinates_data(file_name):
    coordinates = []
    csv_path = "./static/"+file_name
    df = pd.read_csv(csv_path)

    for ind,row in df.iterrows():

        latitude = float(row['DeliveryLocation(Latitude)'])
        longitude = float(row['DeliveryLocation(Longitude)'])
        coordinates.append({"latitude": latitude, "longitude": longitude})

    return coordinates

def sales_data(file_name):
    sales = []
    csv_path = "static/"+file_name
    df = pd.read_csv(csv_path)

    for ind,row in df.iterrows():
        value = float(row['TotalOrderValue'])
        sales.append(value)

    return sales

#!####################################################### All Order
@app.route('/coordinates/all_orders', methods=['GET'])
def get_all_coordinates():

    try:
        coordinates = coordinates_data(file_name="food_delivery_data.csv")
        return jsonify({"coordinates": coordinates})
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/sales/all_orders', methods=['GET'])
def get_all_sales():

    try:
        sales = sales_data(file_name="food_delivery_data.csv")
        return jsonify({"sales": sales})
    except Exception as e:
        return jsonify({"error": str(e)})

############################################################!Burgers
@app.route('/coordinates/burger_orders', methods=['GET'])
def get_burger_coordinates():

    try:
        coordinates = coordinates_data(file_name="Burger_Orders.csv")
        return jsonify({"coordinates": coordinates})
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/sales/burger_orders', methods=['GET'])
def get_burger_sales():

    try:
        sales = sales_data(file_name="Burger_Orders.csv")
        return jsonify({"sales": sales})
    except Exception as e:
        return jsonify({"error": str(e)})

#######################################################! Pasta
@app.route('/coordinates/pasta_orders', methods=['GET'])
def get_pasta_coordinates():
    try:
        coordinates = coordinates_data(file_name="Pasta_Orders.csv")
        return jsonify({"coordinates": coordinates})
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/sales/Pasta_Orders', methods=['GET'])
def get_pasta_sales():

    try:
        sales = sales_data(file_name="Pasta_Orders.csv")
        return jsonify({"sales": sales})
    except Exception as e:
        return jsonify({"error": str(e)})

#########################################################! Pizza
@app.route('/coordinates/pizza_orders', methods=['GET'])
def get_pizza_coordinates():
    
    try:
        coordinates = coordinates_data(file_name="Pizza_Orders.csv")
        return jsonify({"coordinates": coordinates})
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/sales/pizza_orders', methods=['GET'])
def get_pizza_sales():

    try:
        sales = sales_data(file_name="Pizza_Orders.csv")
        return jsonify({"sales": sales})
    except Exception as e:
        return jsonify({"error": str(e)})

#####################################################!SandWhiches
@app.route('/coordinates/sandwhiches', methods=['GET'])
def get_sandwhiches_coordinates():

    try:
        coordinates = coordinates_data(file_name="Sandwhiches_Orders.csv")
        return jsonify({"coordinates": coordinates})
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/sales/sandwhiches', methods=['GET'])
def get_sandwhiches_sales():

    try:
        sales = sales_data(file_name="Sandwhiches_Orders.csv")
        return jsonify({"sales": sales})
    except Exception as e:
        return jsonify({"error": str(e)})

####################################################! Sushi
@app.route('/coordinates/sushi', methods=['GET'])
def get_sushi_coordinates():
    try:
        coordinates = coordinates_data(file_name="Sushi_Orders.csv")
        return jsonify({"coordinates": coordinates})
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/sales/sushi', methods=['GET'])
def get_sushi_sales():

    try:
        sales = sales_data(file_name="Sushi_Orders.csv")
        return jsonify({"sales": sales})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
