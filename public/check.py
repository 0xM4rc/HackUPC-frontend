import json
import os

try:
    with open('food.json', 'r') as archivo:
        datos_json = json.load(archivo)
    # print(datos_json)
except FileNotFoundError:
    print("El archivo 'tu_archivo.json' no se encontró.")
except json.JSONDecodeError:
    print("Error al decodificar el archivo JSON. Asegúrate de que el formato sea correcto.")

valid_items = []
script_dir = os.path.dirname(os.path.abspath(__file__))
for item in datos_json:
    path = item["path"]
    ruta_absoluta = os.path.join(script_dir, path)
    if not os.path.exists(ruta_absoluta):
        print(path)
        continue
    valid_items.append(item)

ruta_archivo_salida = 'food_valid.json'

with open(ruta_archivo_salida, 'w') as archivo_salida:
    json.dump(valid_items, archivo_salida, indent=4)  # Indentación para mejor legibilidad

print(len(valid_items))