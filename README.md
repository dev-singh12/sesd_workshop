# SESD Workshop – Backend API

A production-ready backend service built using **Node.js**, **TypeScript**, **Express**, and **Prisma ORM**, following a clean and scalable architecture.

---

## 🚀 Tech Stack

- Node.js
- TypeScript
- Express.js
- Prisma ORM
- PostgreSQL / MySQL
- JWT Authentication
- ESLint & Prettier

---

## 📁 Project Structure

SESD_WORKSHOP/
├── prisma/
│ └── schema.prisma
│
├── src/
│ ├── controllers/
│ │ ├── auth_controller.ts
│ │ └── contact_controller.ts
│ │
│ ├── middlewares/
│ ├── routes/
│ ├── services/
│ ├── utils/
│ ├── prisma_logic/
│ ├── generated/
│ ├── app.ts
│ └── server.ts
│
├── dist/
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── prisma.config.ts


---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
JWT_SECRET="your_jwt_secret"
📦 Installation
git clone https://github.com/dev-singh12/sesd_workshop.git
cd sesd_workshop
npm install
🛠 Prisma Setup
npx prisma generate
npx prisma migrate dev --name init
Prisma Studio:

npx prisma studio
▶️ Running the Server
Development
npm run dev
Production
npm run build
npm start
🔌 Architecture Overview
Controllers – Handle HTTP requests and responses

Services – Business logic layer

Prisma Logic – Database operations

Routes – Route definitions and mappings

🔐 Authentication
JWT-based authentication

Authorization via Authorization: Bearer <token>

Middleware-protected routes

🧪 Best Practices
Strict TypeScript typing

Layered architecture

Type-safe DB access using Prisma

Environment-based configuration

Clean separation of concerns

📌 Future Enhancements
API documentation (Swagger)

Unit & integration testing

Role-based access control

Logging and rate limiting

CI/CD pipeline

👨‍💻 Author
Dev Singh
Backend Developer | Computer Science Undergraduate

