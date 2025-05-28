# UberClone API Documentation

## User Registration Endpoint

### POST /users/register

This endpoint allows new users to register in the application.

#### Description

Creates a new user account with the provided information and returns an authentication token.

#### Request

- **URL**: `/users/register`
- **Method**: `POST`
- **Content-Type**: `application/json`

#### Request Body

| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| email | String | User's email address | Must be a valid email format |
| fullname | Object | User's full name | - |
| fullname.firstname | String | User's first name | Minimum 3 characters |
| fullname.lastname | String | User's last name | Optional |
| password | String | User's password | Minimum 6 characters |

#### Example Request

```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "securepassword"
}
```

#### Responses

##### Success Response

- **Status Code**: `200 OK`
- **Content**:

```json
{
  "token": "jwt_authentication_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
  }
}
```

##### Error Response

- **Status Code**: `400 Bad Request`
- **Content**:

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Notes

- The password is hashed before storing in the database
- A JWT token is generated and returned upon successful registration
- Email addresses must be unique