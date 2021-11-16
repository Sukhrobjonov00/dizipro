## User Route Requests

#### 1. User Login Post Endpoint

##### Request

`SERVER_URL/v1/users/login`

Headers: `Content-type: "application/json"`

Request body:

| Name          | Description             | Type   | Required |
| ------------- | ----------------------- | ------ | -------- |
| user_email    | User's email(unique)    | String | true     |
| user_password | User's password(4, 128) | String | true     |

##### Response status codes

`201 - Token created successfully`

`400 - Username || Password is invalid`

`500 - Internal Server Error`

#### 2. User Create Account Post Endpoint

##### Request

`SERVER_URL/v1/users/account`

Headers:

`Content-type: "application/json"`

`Authorization: "TOKEN"`

Permissions: `Admin`

Request body:

| Name          | Description                    | Type   | Required |
| ------------- | ------------------------------ | ------ | -------- |
| user_name     | User's name(2, 64)             | String | true     |
| user_email    | User's email(unique)           | String | true     |
| user_gender   | User's gender("male","female") | Enum   | true     |
| country_id    | User's country(0,243)          | Number | true     |
| user_password | User's password(4, 128)        | String | true     |

##### Response status codes

`201 - User Logged in successfully`

`400 - User name || Email || Gender || Country id || Password || is invalid`

`400 - This email already exists`

`401 - Unauthorized || You don't have permission`

`500 - Internal Server Error`

#### 3. User Recovery Password Submit Post Endpoint

##### Request

`SERVER_URL/v1/users/password`

Headers: `Content-type: "application/json"`

Request body:

| Name       | Description  | Type   | Required |
| ---------- | ------------ | ------ | -------- |
| user_email | User's email | String | true     |

##### Response status codes

`201 Confirmation message sent. Check your email.`

`400 - Email is invalid`

`404 - User not found`

`429 - too many requests`

`500 - Internal Server Error`

#### 4. User Recovery Password Check Get Endpoint

##### Request

`SERVER_URL/v1/users/password:attempt_id`

##### Response status codes

`200 - New password was sent to mail.`

`404 - Page not found`

`500 - Internal Server Error`
