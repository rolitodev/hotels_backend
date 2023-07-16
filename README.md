# Hotel API

This is a RESTful API for managing hotels data.

## Features

- Create, read, update, and delete hotels.
- Filter hotels by name, city, or other criteria.
- User authentication using JWT (JSON Web Tokens).
- MongoDB database integration.

## Prerequisites

Before running the API, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB

## Getting Started

1. Clone the repository:

  - git clone https://github.com/rolitodev/hotels_backend.git

2. Install libraries
    
  - npm install

3. Run project

  - node ./app/index.js

The API will start running at http://localhost:3000.

## API Enpoints

- GET /hotels - Retrieve all hotels.
- GET /hotels/:id - Retrieve a specific hotel by ID.
- POST /hotels - Create a new hotel.
- PUT /hotels/:id - Update a hotel by ID.
- DELETE /hotels/:id - Delete a hotel by ID.
- GET /hotels/filter?name=hotel-name&... - Filter hotels.

## Authentication
The API uses JWT for user authentication. To access protected routes, include a valid JWT token in the Authorization header.

To obtain a JWT token, make a POST request to `/hotels/login`.