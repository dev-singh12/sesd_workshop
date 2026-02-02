# SESD Workshop - Contact Management API

This is a robust RESTful API designed for efficient contact management, built during the SESD Workshop. It features secure user authentication and comprehensive CRUD operations for handling contacts.

## 🚀 Features

- **User Authentication**:
  - Secure interaction with JWT (JSON Web Tokens).
  - Password protection using Bcrypt hashing.
  - Registration and Login endpoints.
- **Contact Management**:
  - Create, Read, Update, and Delete (CRUD) contacts.
  - Search and organize personal or professional contacts.
- **Validation**: Robust input validation using `express-validator`.
- **Security**: Integrated `helmet` for HTTP header security and `cors` for cross-origin resource sharing.
- **Database**: Reliable data persistence with PostgreSQL and Prisma ORM.

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: JSON Web Token (JWT) & Bcrypt

## ⚙️ Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v18 or higher recommended)
- **npm** (Node Package Manager)
- **PostgreSQL** (Running locally or via a cloud provider like Neon/Supabase)

## 📦 Installation & Setup

1.  **Clone the repository**

    ```bash
    git clone <repository_url>
    cd sesd_workshop
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Environment Configuration**
    Create a `.env` file in the root directory and configure your valid connection string and secrets:

    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/sesd_workshop?schema=public"
    JWT_SECRET="your_super_secret_key"
    PORT=8080
    ```

4.  **Database Setup**
    Run the Prisma migrations to create the database tables:

    ```bash
    npx prisma migrate dev --name init
    ```

5.  **Start the server**

    ```bash
    # Development mode (with hot-reload)
    npm run dev

    # Production build
    npm run build
    npm start
    ```

## 🔌 API Endpoints

### Authentication

| Method | Endpoint       | Description             |
| :----- | :------------- | :---------------------- |
| `POST` | `/auth/signup` | Register a new user     |
| `POST` | `/auth/login`  | Login and receive a JWT |

### Contacts (Requires Auth)

| Method   | Endpoint        | Description                       |
| :------- | :-------------- | :-------------------------------- |
| `GET`    | `/contacts`     | Retrieve all contacts             |
| `GET`    | `/contacts/:id` | Get details of a specific contact |
| `POST`   | `/contacts`     | Create a new contact              |
| `PUT`    | `/contacts/:id` | Update an existing contact        |
| `DELETE` | `/contacts/:id` | Delete a contact                  |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

