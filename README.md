# 🚀 Node.js URL Shortener

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

A fast, fully-functional URL Shortener built meticulously with **Node.js, Express, and MongoDB**. This application takes long, cumbersome URLs and condenses them into clean, manageable links while actively tracking visit analytics such as click counts and timestamp histories!

## ✨ Key Features
- **Instant URL Shortening**: Generates unique 8-character aliases for any valid URL.
- **Detailed Analytics**: Tracks how many times your short URL has been visited alongside precise timestamps.
- **User Authentication & Authorization**: Secure signup, login, and protected routes using persistent session cookies. Ensures that users can only access and manage their own shortened URLs.
- **Server-Side Rendering**: Built with **EJS** templating for a quick, dynamic, and seamless frontend experience without the overhead of heavy client-side frameworks.
- **Robust Architecture**: Strictly follows the **MVC (Model-View-Controller)** design pattern, keeping routes, controllers, and models cleanly separated for deep maintainability.
- **Scalable Database**: Utilizes Mongoose & MongoDB to reliably store and manage relations between short IDs and their target endpoints seamlessly.

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Frontend Template**: EJS (Embedded JavaScript templating)
- **Utilities**: `shortid` for blazing-fast unique string generation, `cookie-parser` for handling session cookies smoothly.

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your machine.

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/Shubham-Sharma1995/NodeJS_ShortURL.git
   cd NodeJS_ShortURL
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the Database**
   Ensure your local MongoDB server is running on `mongodb://127.0.0.1:27017`

4. **Run the Application**
   ```bash
   npm start
   ```

5. **Open in Browser**
   Navigate to `http://localhost:8001/` to use the application!

## 🛣️ API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Renders the home page and the history of generated URLs |
| `POST` | `/url` | Accepts `{ url: "https://..." }` and generates a new shortened ID |
| `GET` | `/url/:shortId` | Redirects the user to the original destination URL and records the visit |
| `GET` | `/url/analytics/:shortId` | Returns JSON of total clicks and timestamp history for a specific link |
| `GET` | `/signup` | Renders the user signup page |
| `GET` | `/login` | Renders the user login page |
| `POST` | `/user` | Registers a new user account |
| `POST` | `/user/login` | Authenticates an existing user and sets a session cookie |

---
*Built with ❤️ by [Shubham Sharma](https://github.com/Shubham-Sharma1995)*
