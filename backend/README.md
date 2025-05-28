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

## User Login Endpoint

### POST /users/login

This endpoint allows users to authenticate and login to the application.

#### Description

Authenticates a user with email and password, and returns an authentication token.

#### Request

- **URL**: `/users/login`
- **Method**: `POST`
- **Content-Type**: `application/json`

#### Request Body

| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| email | String | User's email address | Must be a valid email format |
| password | String | User's password | Minimum 6 characters |

#### Example Request

```json
{
  "email": "user@example.com",
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

- **Status Code**: `401 Unauthorized`
- **Content**:

```json
{
  "message": "Invalid email or password"
}
```

#### Notes

- The provided password is compared with the hashed password stored in the database
- A JWT token is generated and returned upon successful authentication

## User Profile Endpoint

### GET /users/profile

This endpoint allows authenticated users to retrieve their profile information.

#### Description

Returns the profile information of the currently authenticated user.

#### Request

- **URL**: `/users/profile`
- **Method**: `GET`
- **Headers**: 
  - `Authorization: Bearer <token>` (required if token not in cookie)

#### Responses

##### Success Response

- **Status Code**: `200 OK`
- **Content**:

```json
{
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

- **Status Code**: `401 Unauthorized`
- **Content**:

```json
{
  "message": "Unauthorized"
}
```

#### Notes

- Requires authentication via JWT token
- Returns the user object without sensitive information

## User Logout Endpoint

### GET /users/logout

This endpoint allows users to logout from the application.

#### Description

Invalidates the current authentication token by adding it to a blacklist.

#### Request

- **URL**: `/users/logout`
- **Method**: `GET`
- **Headers**: 
  - `Authorization: Bearer <token>` (required if token not in cookie)

#### Responses

##### Success Response

- **Status Code**: `200 OK`
- **Content**:

```json
{
  "message": "Logged out successfully"
}
```

##### Error Response

- **Status Code**: `401 Unauthorized`
- **Content**:

```json
{
  "message": "Unauthorized"
}
```

#### Notes

- The token is added to a blacklist with a 24-hour TTL
- The cookie containing the token is cleared
- Subsequent requests with the blacklisted token will be rejected