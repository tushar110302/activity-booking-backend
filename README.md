/*************  ✨ Windsurf Command ⭐  *************/
# MeetX Backend Task

This is the backend for the MeetX task. It is a RESTful API built with Node.js and Express.js. It uses MongoDB as the database and JWT for authentication.

## Setup

### Prerequisites

* Node.js installed on your computer
* MongoDB installed on your computer

### Installation

1. Clone the repository
2. Install the dependencies with `npm install`
3. Create a .env file in the root directory with the following variables:
    * PORT: The port number to run the server on
    * DB_URI: The URI for the MongoDB database
    * JWT_SECRET: The secret key for the JWT
4. Run the server with `npm run dev`

### Usage

The API has the following endpoints:

* POST /api/v1/users/register - Register a new user
* POST /api/v1/users/login - Login a user
* GET /api/v1/activities - Get all activities
* POST /api/v1/activities - Create a new activity
* POST /api/v1/activities/bookActivity - Book an activity
* GET /api/v1/activities/getBookingsByUserId - Get all bookings for a user

### Testing

The API has been tested with Postman. You can test it by sending a POST request to the register endpoint with a user object in the body. Then, you can test the login endpoint by sending a POST request with the user's email and password. After that, you can test the other endpoints.

### Deployment

The API is ready to be deployed to a server. You can use a service like Heroku or AWS to deploy it. You will need to create a new instance of the MongoDB database and update the DB_URI variable in the .env file. Then, you can deploy the API to the server.
/*******  d48a3b7d-52b0-433d-9d08-ade25e72a879  *******/