## ApiService

The `ApiService` module provides functions to interact with the backend API for various operations such as user authentication, fetching and updating user data, and managing scores.

## Description

The `ApiService` module is an object that contains various asynchronous functions to perform API calls using `axios`. These functions handle operations such as login, fetching top scores, fetching all users, creating a new user, updating an existing user, updating player scores, and deleting a user.

## Class Structure

- **`ApiService` object**:
  - Functions:
    - `login`: Authenticates a user.
    - `fetchTopScores`: Fetches the top scores.
    - `fetchAllUsers`: Fetches all users.
    - `createUser`: Creates a new user.
    - `updateUser`: Updates an existing user.
    - `deleteUser`: Deletes a user.
    - `getUserById`: Fetches a user by their ID.
    - `updatePlayerScore`: Updates the player's score.

## Main Logic

**Function Descriptions (`ApiService` object)**:

- **`login`**:
  - **Description**: Authenticates a user with the provided username and password.
  - **Parameters**:
    - `username` (string): The username of the user.
    - `password` (string): The password of the user.
  - **Returns**: A promise that resolves to the response data from the API.

- **`fetchTopScores`**:
  - **Description**: Fetches the top scores from the API.
  - **Returns**: A promise that resolves to the list of top scores from the API.

- **`fetchAllUsers`**:
  - **Description**: Fetches all users from the API.
  - **Returns**: A promise that resolves to the list of all users from the API.

- **`createUser`**:
  - **Description**: Creates a new user.
  - **Parameters**:
    - `user` (object): The user data to create.
  - **Returns**: A promise that resolves to the created user data from the API.
  - **Throws**: An error if the username already exists or there is an error creating the user.

- **`updateUser`**:
  - **Description**: Updates an existing user.
  - **Parameters**:
    - `id` (number): The ID of the user to update.
    - `user` (object): The updated user data.
  - **Returns**: A promise that resolves to the updated user data from the API.
  - **Throws**: An error if the username already exists.

- **`deleteUser`**:
  - **Description**: Deletes a user.
  - **Parameters**:
    - `id` (number): The ID of the user to delete.
  - **Returns**: A promise that resolves when the user is deleted.

- **`getUserById`**:
  - **Description**: Fetches a user by their ID.
  - **Parameters**:
    - `userId` (number): The ID of the user to fetch.
  - **Returns**: A promise that resolves to the user data from the API.

- **`updatePlayerScore`**:
  - **Description**: Updates the player's score.
  - **Parameters**:
    - `name` (string): The name of the player.
    - `score` (number): The new score of the player.
  - **Returns**: A promise that resolves to the updated player score data from the API.

## External Dependencies

- **axios**: The module uses `axios` for making HTTP requests to the API.
  - `import axios from "axios";`: This import is necessary to use `axios` for API calls.

## Base URL

- **API_BASE_URL**: The base URL for the API is defined as `http://localhost:8082/api/v1`.

```javascript
const API_BASE_URL = "http://localhost:8082/api/v1";
