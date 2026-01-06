Personal Finance Tracker API

A REST API built with Node.js, Express, and MongoDB for tracking income and expenses with secure authentication.

Features

User registration & login (JWT)

Track income and expenses

Categories support

Monthly summary

Profile picture upload

Admin-only overview

Swagger API documentation

Tech Stack

Node.js

Express

MongoDB + Mongoose

JWT & bcrypt

Multer & Cloudinary

Swagger

Render (deployment)

Project Structure
src/
 ├── app.js
 ├── server.js
 ├── config/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/

Installation
npm install
npm run dev


Server runs on:

http://localhost:5000

Environment Variables

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx

API Endpoints
Auth

POST /auth/register

POST /auth/login

GET /auth/profile

Transactions

POST /transactions

GET /transactions

PUT /transactions/:id

DELETE /transactions/:id

GET /transactions/monthly-summary

Upload

POST /upload/profile-picture

Admin

GET /admin/overview

API Docs

Swagger available at:

/docs

Deployment

Deployed using Render.

Author

Zaki Moha