# Sistema Inteligente de Dynamic Pricing y Optimización de Capacidad

Repositorio oficial del Trabajo de Fin de Máster de **Inmaculada Osuna Muñoz**, del Máster en Ciencia de Datos, Big Data e Inteligencia Artificial de la Universidad Complutense de Madrid.

## Enlaces de Interés
* **Demostración Web:** [Ver Página Web](https://railpricing.vercel.app/)
* **Vídeo de Presentación:** [Ver en YouTube](https://youtu.be/9JHEJZY-EfM)

## Sobre el Proyecto
Este sistema desarrolla una solución *End-to-End* para la optimización de precios en la Alta Velocidad ferroviaria. El modelo equilibra la demanda a corto plazo con la preservación del inventario a largo plazo mediante **Deep Reinforcement Learning**.

El flujo de trabajo incluye:
1. Ingesta y ETL distribuido con **PySpark** (38,7 millones de filas).
2. Entorno de simulación creado con **Gymnasium**.
3. *Baseline* supervisado con **Random Forest**.
4. Agente autónomo **Proximal Policy Optimization (PPO)**.
5. Validación estadística mediante **Monte Carlo**.
6. Despliegue en producción con arquitectura **MLOps y Guardrails**.
