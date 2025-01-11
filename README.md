# Weather App

## Descripción

Esta aplicación de clima te permite buscar el clima actual y las previsiones de cualquier ubicación utilizando APIs gratuitas. Diseñada con **Vite**, **React**, **HTML**, **CSS** y **JavaScript**, es una herramienta fácil de usar que ofrece un diseño responsivo y algunas animaciones modernas para una experiencia de usuario mejorada.

---

## Características

- **Búsqueda de ubicación:** Busca el clima actual ingresando el nombre de una ciudad o lugar.
- **Autocompletar direcciones:** La aplicación utiliza la API de [LocationIQ](https://locationiq.com/) para autocompletar nombres de ciudades.
- **Clima actual:** Consulta datos precisos del clima actual utilizando la API de [OpenWeatherMap](https://openweathermap.org/).
- **Responsivo:** Diseño adaptable a móviles, tabletas y computadoras.
- **Animaciones:** Interacciones suaves para botones y tarjetas de información.

---

## Tecnologías utilizadas

- **Frontend:** React con Vite
- **Estilos:** CSS (responsivo y con animaciones)
- **APIs:**
  - [LocationIQ API](https://locationiq.com/) para el autocompletado de direcciones.
  - [OpenWeatherMap API](https://openweathermap.org/) para datos meteorológicos.

---

## Visita el proyecto en linea

A través del siguiente enlace podrás utilizar la app, y ver su fuincionamiento:
- [Visita la DEMO](https://nexwey.online/portafolio/Proyectos/wheather_app/index.html)

## Instalación y uso

Sigue estos pasos para clonar y ejecutar el proyecto:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tuusuario/weather-app.git
   cd weather-app
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y agrega tus claves de API:

   ```env
   VITE_WEATHER_API_KEY=tu_clave_de_openweathermap
   VITE_LOCATIONIQ_API_KEY=tu_clave_de_locationiq
   ```

4. Inicia la aplicación en modo desarrollo:

   ```bash
   npm run dev
   ```

5. Abre tu navegador en `http://localhost:5173` para ver la aplicación en acción.

---

## Estructura del proyecto

```plaintext
weather-app/
├── public/             # Archivos estáticos
├── src/                # Código fuente
│   ├── components/     # Componentes de React
│   │── App.css         # Estilos   
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Punto de entrada
├── .env                # Variables de entorno
├── package.json        # Dependencias del proyecto
└── vite.config.js      # Configuración de Vite
```

---

## APIs utilizadas

### OpenWeatherMap

- **Descripción:** Proporciona datos climáticos actuales y previsiones.
- **Sitio web:** [https://openweathermap.org/](https://openweathermap.org/)
- **Tipo de API:** Gratuita (requiere registro para obtener una clave de API).

### LocationIQ

- **Descripción:** Proporciona datos geográficos para autocompletar direcciones.
- **Sitio web:** [https://locationiq.com/](https://locationiq.com/)
- **Tipo de API:** Gratuita (requiere registro para obtener una clave de API).

---

## Creditos

- **APIs:**
  - Datos meteorológicos proporcionados por [OpenWeatherMap](https://openweathermap.org/).
  - Datos de ubicación proporcionados por [LocationIQ](https://locationiq.com/).
- **Desarrollo:** Este proyecto fue desarrollado por [Tadeo Roberto Pantoja López](https://github.com/tuusuario).

---

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más información.

