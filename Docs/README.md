# Documentación del Trabajo de Fin de Máster (TFM)
---

## Contenido de la Carpeta

Esta carpeta centraliza los entregables documentales y multimedia requeridos para la evaluación del TFM:

1. **Memoria** : Documento principal de la memoria técnica y de negocio (incluyendo el análisis, modelización, resultados de Monte Carlo y conclusiones).
2. **Anexo** : Documento complementario que recopila de forma íntegra el código fuente del proyecto estructurado por módulos (Ingesta PySpark, Entorno Gymnasium, Agente PPO, Baseline RF, Simulación y MLOps).
3. **Presentación en vídeo**: Vídeo de defensa ejecutiva donde se exponen el enfoque, la arquitectura, los retos y las lecciones aprendidas [Ver Vídeo en YouTube](https://youtu.be/9JHEJZY-EfM).

---

## Resumen del Proyecto

Este trabajo aborda la optimización dinámica de precios (*Dynamic Pricing*) y la gestión de capacidad para inventarios estrictamente perecederos en la Alta Velocidad ferroviaria (caso de uso RENFE). 

### Fases Clave del Desarrollo:
* **Ingeniería Big Data:** Procesamiento distribuido de más de **38,7 millones de registros** históricos mediante **Apache Spark (PySpark)**, implementando un particionado estrictamente cronológico para garantizar la prevención de fugas de datos (*Data Leakage*).
* **Modelización y Simulación:** Formulación del problema como un Proceso de Decisión de Markov (MDP) utilizando **Gymnasium**. Resolución de la recompensa diferida (*Sparse Rewards*) mediante *Potential-Based Reward Shaping* guiado por un oráculo de Programación Dinámica.
* **Inteligencia Artificial Autónoma:** Entrenamiento de un agente de Aprendizaje por Refuerzo Profundo mediante **Proximal Policy Optimization (PPO)**, contrastándolo frente a un modelo predictivo supervisado (Random Forest) para evidenciar y resolver la miopía del Machine Learning clásico.
* **Validación de Negocio:** Ejecución masiva de simulaciones de **Monte Carlo (1.620.000 episodios evaluados)** combinando escenarios de demanda y elasticidad, con cálculo de intervalos de confianza mediante *Bootstrapping*.
* **MLOps y Productivización:** Despliegue de la política aprendida en una aplicación web interactiva (alojada en **Vercel**), implementando inferencia instantánea en memoria , explicabilidad visual mediante mapas de calor (XAI) y una capa de gobernanza mediante *Guardrails*.

---

## Enlaces de Interés
* **Aplicación Web Interactiva:** [Enlace a la App en Vercel](https://railpricing.vercel.app/) 
* **Vídeo de Presentación:** [Ver Vídeo en YouTube](https://youtu.be/9JHEJZY-EfM)
