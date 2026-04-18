# Short URL - URL Shortener API

A URL shortener service built with **Node.js**, **Express**, and **MongoDB**, following the **MVC architecture pattern**. Generate short URLs, redirect users, and track visit analytics.

## Project Structure

```
├── index.js              # Entry point - Express server & redirect route
├── connect.js            # MongoDB connection handler
├── models/
│   └── url.js            # Mongoose schema for URL (shortId, redirectURL, visitHistory)
├── controllers/
│   └── url.js            # Business logic for URL shortening & analytics
├── routes/
│   └── url.js            # Express Router for URL endpoints
├── package.json
└── .gitignore
```

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js v5
- **Database**: MongoDB with Mongoose ODM
- **ID Generation**: ShortID for generating unique short URLs
- **Dev Tool**: Nodemon

## Features

- **Generate Short URLs** — POST a long URL and get a unique short ID back
- **URL Redirection** — Visit `/:shortID` and get redirected to the original URL
- **Visit Analytics** — Track every visit with timestamps and get total click count
- **MVC Architecture** — Clean separation of Models, Controllers, and Routes

## API Endpoints

| Method | Endpoint                      | Description                       |
|--------|-------------------------------|-----------------------------------|
| `POST` | `/url`                        | Generate a new short URL          |
| `GET`  | `/:shortID`                   | Redirect to the original URL      |
| `GET`  | `/url/analytics/:shortId`     | Get visit analytics for a short URL |

### POST `/url` — Create Short URL

**Request Body** (JSON):
```json
{
  "url": "https://example.com/some-long-url"
}
```

**Response**:
```json
{
  "id": "abc123"
}
```

### GET `/:shortID` — Redirect

Visiting `http://localhost:8001/abc123` will redirect you to the original URL and log the visit.

### GET `/url/analytics/:shortId` — Analytics

**Response**:
```json
{
  "totalClicks": 3,
  "analytics": [
    { "timestamp": 1713200000000 },
    { "timestamp": 1713200100000 },
    { "timestamp": 1713200200000 }
  ]
}
```

## URL Schema

```javascript
{
  shortId:      { type: String, required: true, unique: true },
  redirectURL:  { type: String, required: true },
  visitHistory: [{ timestamp: { type: Number } }],
  createdAt:    { type: Date },   // auto-generated
  updatedAt:    { type: Date }    // auto-generated
}
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) running locally on `mongodb://127.0.0.1:27017`

### Installation

```bash
# Clone the repo
git clone https://github.com/Shubham-Sharma1995/NodeJS_ShortURL.git
cd NodeJS_ShortURL

# Install dependencies
npm install

# Start the server (uses nodemon)
npm start
```

The server will start at **http://localhost:8001**.

## What I Learned

- Building a **URL shortener** service from scratch
- Using **ShortID** library for generating unique identifiers
- Tracking **visit analytics** with MongoDB `$push` operations
- Implementing **URL redirection** with `res.redirect()`
- Structuring a Node.js project with the **MVC pattern**
- Working with **Mongoose** schemas, `findOneAndUpdate`, and `findOne`
