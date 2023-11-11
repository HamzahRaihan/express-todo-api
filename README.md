# Todo API

This project was built using MongoDB, Express JS, and Mongoose. This documentation will describe to you how to use the API. There is a total of 11 Endpoints in this API.

## Feature

#### User

- Get All User
- Get User By ID
- Account Login
- Post New User
- Delete User
- Edit User

#### Todo

- Get All Todo
- Get Todo By ID
- Post New Todo
- Delete Todo
- Edit Todo

### Authorization

To authenticate an API request, you should provide your token key in the `Authorization` header.

```http
POST https://express-todo-api-eta.vercel.app/users/auth
```

### Endpoint For Todos

| Method   | Endpoint     | Description                                     |
| -------- | ------------ | ----------------------------------------------- |
| `GET`    | `/todos`     | Get all todo data                               |
| `GET`    | `/todos/:id` | Get todo by id                                  |
| `POST`   | `/todos`     | `require authentication` Create new todo        |
| `PUT`    | `/todos/:id` | `require authentication` Update/edit todo by id |
| `DELETE` | `/todos/:id` | `require authentication` Delete todo data by id |

### Endpoint For Users

| Method   | Endpoint      | Description                                     |
| -------- | ------------- | ----------------------------------------------- |
| `GET`    | `/users`      | Get all user data                               |
| `GET`    | `/users/:id`  | Get user by id                                  |
| `POST`   | `/users`      | Create new user                                 |
| `POST`   | `/users/auth` | Account Login                                   |
| `PUT`    | `/users/:id`  | `require authentication` Update/edit user by id |
| `DELETE` | `/users/:id`  | `require authentication` Delete user data by id |
