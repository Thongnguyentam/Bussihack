from flask import Flask, request, render_template
from sklearn.ensemble import ExtraTreesRegressor
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
app = Flask(__name__)

@app.route('/')
def loadPage():
    return "Hello world"
    #return render_template()


@app.route('/', method = ['POST'])
def Prediction():
    return "Hello world"

app.run()