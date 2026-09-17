# Jupyter Notebooks de Modelización y Entrenamiento

Esta carpeta contiene el desarrollo analítico completo del Trabajo Fin de Máster. Para facilitar su revisión sin necesidad de ejecutar procesos pesados, se incluyen tanto los cuadernos originales (`.ipynb`) como sus versiones exportadas en PDF.

### Contenido analítico
El desarrollo se estructura en las siguientes fases metodológicas:

1. **Ingesta y ETL Masivo:** Procesamiento distribuido mediante Apache Spark (PySpark) de más de 38,7 millones de registros transaccionales reales, aplicando un particionado temporal estricto para evitar *Data Leakage*.
2. **Entorno de Simulación:** Formulación del problema como un Proceso de Decisión de Markov (MDP) utilizando la API de Gymnasium y un oráculo de Programación Dinámica (DP) para generar una señal de *Potential-Based Reward Shaping*.
3. **Entrenamiento:** 
   * Entrenamiento de un modelo baseline miópico (Random Forest Regressor).
   * Entrenamiento del agente de Inteligencia Artificial mediante *Proximal Policy Optimization (PPO)*.
4. **Validación de Negocio:** Evaluación masiva de estrategias mediante simulaciones de Monte Carlo y generación de mapas de calor (Heatmaps) de la política aprendida.
5. **Exportación MLOps:** Serialización de la política neuronal final al archivo `cerebro.js` utilizado en el entorno de productivización web.
