# Laboratorio 1 — Hash Demo (SHA-256)

**Objetivo**: Comprender la sensibilidad a cambios mínimos en SHA-256 y la inmutabilidad que proporciona a una cadena de bloques.

**Entorno**: Google Colab (Python)

**Pasos**
1.  Abre el notebook de Colab: [https://colab.research.google.com/drive/1-demo-hash-sha256]
2.  **Celda 1:** Ejecuta la celda para instalar y importar las librerías necesarias.
3.  **Celda 2:** Ejecuta la celda con el texto base (ej. "Contrato de Arrendamiento 2025"). Copia el hash resultante.
4.  **Celda 2 (Modificación):** Modifica *solo un carácter* del texto base (ej. "Contrato de Arrendamiento 2026"). Ejecuta la celda de nuevo y observa el nuevo hash.

**Entrega sugerida (Portafolio)**:
Adjunta una captura de pantalla de los dos hashes (antes y después del cambio) y redacta un párrafo explicando cómo este "efecto avalancha" es fundamental para la seguridad e inmutabilidad de la cadena de bloques.
