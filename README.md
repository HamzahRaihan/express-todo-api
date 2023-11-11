# Todo API

This project was built using MongoDB, Express JS, and Mongoose. This readme will describe to you how to use the API.

## Feature

#### User

- Get All User
- Get User By ID
- Post New User
- Edit User

#### Todo

- Get All Todo
- Get Todo By ID
- Post New Todo
- Edit Todo

### Authorization

To authenticate an API request, you should provide your token key in the `Authorization` header.

```http
GET /users/auth/login
```

### Endpoint For Todo

| Method   | Endpoint     | Description            |
| -------- | ------------ | ---------------------- |
| `GET`    | `/todos`     | Get all todo data      |
| `POST`   | `/todos`     | Create new todo        |
| `PUT`    | `/todos/:id` | Update/edit todo by id |
| `DELETE` | `/todos/:id` | Delete todo data by id |
