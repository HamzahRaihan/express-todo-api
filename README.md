# Todo API

This project was built using MongoDB, Express JS, and Mongoose. This documentation will describe to you how to use the API. There is a total of 9 Endpoints in thi API.

## Feature

#### User

- Get All User
- Get User By ID
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
POST https://express-todo-api-eta.vercel.app/users/auth/login
```

### Endpoint For Todos

| Method   | Endpoint     | Description            |
| -------- | ------------ | ---------------------- |
| `GET`    | `/todos`     | Get all todo data      |
| `POST`   | `/todos`     | Create new todo        |
| `PUT`    | `/todos/:id` | Update/edit todo by id |
| `DELETE` | `/todos/:id` | Delete todo data by id |

### Endpoint For Users

| Method   | Endpoint            | Description            |
| -------- | ------------------- | ---------------------- |
| `GET`    | `/users`            | Get all user data      |
| `POST`   | `/users`            | Create new user        |
| `POST`   | `/users/auth/login` | Account Login          |
| `PUT`    | `/users/:id`        | Update/edit user by id |
| `DELETE` | `/users/:id`        | Delete user data by id |
