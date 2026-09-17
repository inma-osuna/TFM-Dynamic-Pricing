# Origen y Descarga de Datos

Este proyecto utiliza el conjunto de datos abierto de precios y transacciones de la red de Alta Velocidad española (Renfe). 

Debido a su gran volumen (**más de 38,7 millones de registros transaccionales**), el archivo original completo no se incluye en el control de versiones ni en la entrega comprimida para evitar problemas de espacio y rendimiento. En su lugar, se proporciona una muestra representativa (`dataset_sample.csv`) para comprobaciones rápidas de ejecución.

---

### Fuente oficial del Dataset

* **Nombre:** Spanish High Speed Rail Ticket Pricing (Renfe)
* **Plataforma:** Kaggle
* **Enlace directo de descarga:**  
  [https://www.kaggle.com/datasets/thegurusteam/spanish-high-speed-rail-system-ticket-pricing](https://www.kaggle.com/datasets/thegurusteam/spanish-high-speed-rail-system-ticket-pricing)

---

### Instrucciones para reproducir el pipeline completo

1. Acceder al enlace superior en Kaggle.
2. Descargar el archivo fuente: `thegurus-opendata-renfe-trips.csv`.
3. Colocar el archivo descargado directamente en el directorio de trabajo del proyecto (o dentro de esta carpeta `data/`).
4. Ejecutar el pipeline de ingesta y procesamiento distribuido en PySpark detallado en los cuadernos del proyecto.
