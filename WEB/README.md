# Interfaz Web y Despliegue

Esta carpeta contiene el código fuente del frontend desarrollado para productivizar el modelo de Deep Reinforcement Learning (PPO). La aplicación actúa como un Sistema de Apoyo a la Decisión Híbrido, permitiendo auditar la política tarifaria mediante Inteligencia Artificial Explicable.

### Archivos principales
* **`index.html` / Frontend:** Interfaz de usuario interactiva diseñada con Tailwind CSS.
* **`cerebro.js`:** Diccionario vectorizado comprimido que contiene la política neuronal exportada. Permite al navegador realizar una búsqueda de clave-valor en memoria con complejidad de tiempo $\mathcal{O}(1)$, evitando el coste computacional de realizar inferencias en tiempo real contra la red neuronal.
* **Scripts de Gobernanza:** Lógica en JavaScript que implementa *Guardrails* corporativos para truncar precios que violen los límites establecidos (vetos de seguridad).

### Despliegue
La aplicación está desplegada y accesible públicamente a través de Vercel en el siguiente enlace:
 **https://railpricing.vercel.app/**
