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

### Endpoint For Todo

| Endpoint | Description                                           | Data Type                        |
| -------- | ----------------------------------------------------- | -------------------------------- |
| `GET`    | The total number of resources available from this api | integer                          |
| `POST`   | The url for the next 'page' in the list               | string                           |
| `PUT`    | The url for the previous page in the list             | boolean                          |
| `DELETE` | The list of non-named api resources                   | list [APIResource](#apiresource) |
