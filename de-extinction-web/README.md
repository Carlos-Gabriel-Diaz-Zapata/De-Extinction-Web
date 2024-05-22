Proyecto De-Extinction
Descripción
De-Extinction es un juego de plataforma y acción en el que guías a un dinosaurio a través de un mundo prehistórico lleno de obstáculos. El jugador debe saltar sobre obstáculos y evitar colisiones para sobrevivir el mayor tiempo posible y obtener la puntuación más alta. El juego también incluye funcionalidades administrativas para la gestión de usuarios.

Tabla de Contenidos
Instalación
Uso
Estructura del Proyecto
Rutas
Componentes
Servicios
Contexto de Autenticación
Tecnologías Utilizadas
Contribuciones
Licencia
Instalación
Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

Clonar el repositorio:

git clone https://github.com/tu-usuario/de-extinction.git
Navegar al directorio del proyecto:

cd de-extinction
Instalar las dependencias:

npm install
Iniciar el servidor de desarrollo:

bash
Copiar código
npm start
El proyecto debería estar disponible en http://localhost:3000.

Uso
Para jugar a De-Extinction, simplemente abre la aplicación en tu navegador. Puedes registrarte, iniciar sesión y comenzar a jugar. Si tienes permisos de administrador, puedes acceder a la sección de administración para gestionar usuarios.

Estructura del Proyecto
La estructura del proyecto es la siguiente:


de-extinction/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/
│   │   └── (imágenes y recursos estáticos)
│   │
│   ├── components/
│   │   ├── PrincipalPage.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── AdminRoute.jsx
│   │   └── ScrollToTopButton.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HeaderAdminPage.jsx
│   │   ├── HeaderCreateUsers.jsx
│   │   ├── HeaderEditUser.jsx
│   │   └── HeaderProfile.jsx
│   │
│   ├── Page/
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── Profile.jsx
│   │   ├── Scores.jsx
│   │   ├── AdminPage.jsx
│   │   ├── CreateUserPage.jsx
│   │   ├── EditUserPage.jsx
│   │   ├── HowToPlay.jsx
│   │   └── WeAreDeExtinction.jsx
│   │
│   ├── services/
│   │   └── ApiService.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── index.jsx
│
└── package.json
Rutas
El proyecto utiliza react-router-dom para la gestión de rutas. A continuación se listan las rutas disponibles:

/: Página principal del juego.
/login: Página de inicio de sesión.
/register: Página de registro de usuario.
/profile: Página de perfil de usuario (protegida).
/scores: Página de puntuaciones (protegida).
/admin: Página de administración (solo para administradores).
/admin/new: Página para crear un nuevo usuario (solo para administradores).
/admin/edit/:userId: Página para editar un usuario existente (solo para administradores).
Componentes
Componentes Principales
PrincipalPage: Página principal del juego.
LoginPage: Página de inicio de sesión.
RegisterPage: Página de registro de usuario.
Profile: Página de perfil de usuario.
Scores: Página de puntuaciones.
AdminPage: Página de administración de usuarios.
CreateUserPage: Página para crear un nuevo usuario.
EditUserPage: Página para editar un usuario existente.
Componentes de Layout
Header: Encabezado general de la aplicación.
Footer: Pie de página general de la aplicación.
HeaderAdminPage: Encabezado específico para la página de administración.
HeaderCreateUsers: Encabezado específico para la página de creación de usuarios.
HeaderEditUser: Encabezado específico para la página de edición de usuarios.
HeaderProfile: Encabezado específico para la página de perfil.
Componentes de Rutas Protegidas
ProtectedRoute: Componente para proteger rutas accesibles solo para usuarios autenticados.
AdminRoute: Componente para proteger rutas accesibles solo para administradores.
Otros Componentes
ScrollToTopButton: Botón para scroll al inicio de la página.
Servicios
ApiService
El archivo ApiService.js contiene funciones para interactuar con la API del backend, incluyendo:

login: Realiza el login de un usuario.
fetchTopScores: Obtiene las mejores puntuaciones.
fetchAllUsers: Obtiene todos los usuarios.
createUser: Crea un nuevo usuario.
updateUser: Actualiza un usuario existente.
deleteUser: Elimina un usuario.
getUserById: Obtiene un usuario por su ID.
updatePlayerScore: Actualiza el puntaje de un jugador.
Contexto de Autenticación
AuthContext
El archivo AuthContext.jsx gestiona el estado de autenticación de la aplicación. Proporciona:

AuthProvider: Proveedor de contexto para envolver la aplicación.
AuthContext: Contexto que contiene el estado del usuario y funciones de login y logout.
Tecnologías Utilizadas
React: Biblioteca principal para la construcción de la interfaz de usuario.
React Router: Para la gestión de rutas en la aplicación.
Axios: Para realizar solicitudes HTTP a la API.
React Toastify: Para mostrar notificaciones.
CSS: Para el estilo y diseño de la aplicación.