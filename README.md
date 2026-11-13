# CPA Contable

Herramienta web en desarrollo para apoyar a Contadores Públicos Autorizados S. de R.L. (CPA), una firma contable de San Pedro Sula, Cortés, Honduras. El proyecto busca reducir el trabajo manual de preparación de información contable y fiscal para pequeñas empresas y pymes, sin sustituir sus sistemas actuales ni sus proveedores.

## Objetivo

La primera etapa establece una base para organizar el flujo de documentos de compra y venta y, en futuras iteraciones, explorar la captura asistida de datos desde facturas. El equipo contable debe poder revisar y aprobar los datos extraídos antes de utilizarlos en cierres o reportes. Este repositorio es un prototipo técnico: todavía no procesa documentos ni genera declaraciones fiscales.

## Tecnologías

- **Backend:** Python 3.12+, FastAPI y pytest.
- **Frontend:** React, TypeScript y Vite.
- **Integración continua:** GitHub Actions ejecuta las pruebas del backend y compila el frontend.

## Ejecutar en desarrollo

Requisitos: Python 3.12 o posterior, Node.js 22 o posterior y npm.

1. En una terminal, instalá las dependencias del backend y ejecutá la API:

   ```powershell
   cd backend
   python -m venv .venv
   .\.venv\Scripts\Activate.ps1
   pip install -r requirements.txt
   uvicorn app.main:app --reload
   ```

   La API estará disponible en `http://127.0.0.1:8000`; su documentación interactiva se publica en `/docs`.

2. En otra terminal, instalá las dependencias del frontend y ejecutá Vite:

   ```powershell
   cd frontend
   npm install
   npm run dev
   ```

3. Para validar localmente, desde `backend` ejecutá `python -m pytest`; desde `frontend` ejecutá `npm run build`.

## Privacidad y seguridad

Los registros, facturas, credenciales y demás información de clientes son confidenciales. No subás información real, archivos de clientes, credenciales, llaves, tokens ni archivos `.env` a este repositorio. La interfaz inicial usa contenido demostrativo y no requiere ni almacena información de clientes. Antes de implementar carga o procesamiento de documentos, se deberán definir controles de acceso, almacenamiento, retención, cifrado, auditoría y autorización del cliente. El prototipo no debe usarse para tomar decisiones contables o fiscales.

## Estado y colaboración

El proyecto está en fase inicial. Las contribuciones deben incluir pruebas para la funcionalidad nueva, describir los cambios y evitar datos reales en ejemplos y capturas. La automatización de lectura de facturas, la revisión humana, los formatos de salida y cualquier integración se definirán con el equipo de CPA antes de implementarse.

## Verificación del proyecto

Código de verificación del propietario: **LEARN-CAP-D1D54FCE**
