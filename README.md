# Activity Booking

This is the backend for the Activity Booking App. It is a RESTful API built with Node.js and Express.js. It uses MongoDB as the database and JWT for authentication.

## Setup

### Installation

1. Clone the repository
2. Install the dependencies with `npm install`
3. Create a .env (sample file provided) file in the root directory with the following variables:
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

API Documentation - https://documenter.getpostman.com/view/26915982/2sB2j98p7d#511ec459-7dbc-4050-9e9c-60e01ce18024

### Deployment

The backend is deployed on Render - https://activity-booking-backend-kn5i.onrender.com
