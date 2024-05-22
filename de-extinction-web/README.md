# De-Extinction Project

## Description
**De-Extinction** is a platform and action game where you guide a dinosaur through a prehistoric world full of obstacles. The player must jump over obstacles and avoid collisions to survive as long as possible and achieve the highest score. The game also includes administrative functionalities for user management.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Routes](#routes)
- [Components](#components)
- [Services](#services)
- [Authentication Context](#authentication-context)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation
Follow these steps to set up and run the project locally.

1. **Clone the repository:**
   git clone https://github.com/your-username/de-extinction.git
2. **Navigate to the project directory:**
   cd de-extinction
3. **Install the dependencies:**
   npm install
4. **Start the development server:**
   npm start
The project should be available at http://localhost:3000.

## Usage
To play De-Extinction, simply open the application in your browser. You can register, log in, and start playing. If you have admin permissions, you can access the admin section to manage users.

## Project Structure
The project structure is as follows:

de-extinction/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/
│   │   └── (images and static resources)
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
## Routes
The project uses react-router-dom for route management. The available routes are:

/: Main game page.
/login: Login page.
/register: User registration page.
/profile: User profile page (protected).
/scores: Scores page (protected).
/admin: Admin page (admins only).
/admin/new: Create new user page (admins only).
/admin/edit/:userId: Edit existing user page (admins only).
## Components
## Main Components
PrincipalPage: Main game page.
LoginPage: Login page.
RegisterPage: User registration page.
Profile: User profile page.
Scores: Scores page.
AdminPage: User management page.
CreateUserPage: Create new user page.
EditUserPage: Edit existing user page.
## Layout Components
Header: General application header.
Footer: General application footer.
HeaderAdminPage: Admin page header.
HeaderCreateUsers: Create user page header.
HeaderEditUser: Edit user page header.
HeaderProfile: Profile page header.
## Protected Route Components
ProtectedRoute: Component to protect routes accessible only to authenticated users.
AdminRoute: Component to protect routes accessible only to administrators.
## Other Components
ScrollToTopButton: Button to scroll to the top of the page.
##Services
##ApiService
The ApiService.js file contains functions to interact with the backend API, including:

login: Logs in a user.
fetchTopScores: Fetches top scores.
fetchAllUsers: Fetches all users.
createUser: Creates a new user.
updateUser: Updates an existing user.
deleteUser: Deletes a user.
getUserById: Fetches a user by their ID.
updatePlayerScore: Updates a player's score.
## Authentication Context
## AuthContext
The AuthContext.jsx file manages the authentication state of the application. It provides:

AuthProvider: Context provider to wrap the application.
AuthContext: Context that contains the user state and login/logout functions.
## Technologies Used
React: Main library for building the user interface.
React Router: For route management in the application.
Axios: For making HTTP requests to the API.
React Toastify: For displaying notifications.
CSS: For styling and designing the application.




