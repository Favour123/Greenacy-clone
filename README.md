# Greenacy Clone

A modern web application built with React and Node.js, featuring a clean UI with Tailwind CSS and a robust backend with Express and MongoDB.

## 🚀 Tech Stack

### Frontend
- React with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Shadcn UI components
- Framer Motion for animations
- React Router for navigation
- Axios for API requests

### Backend
- Node.js with Express
- TypeScript
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- CORS enabled

## 📁 Project Structure

```
├── client/                 # Frontend application
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   ├── index.html         # Entry HTML file
│   └── package.json       # Frontend dependencies
│
└── server/                # Backend application
    ├── controllers/       # Request handlers
    ├── models/           # Database models
    ├── routes/           # API routes
    ├── middlewares/      # Custom middlewares
    ├── utils/            # Utility functions
    ├── index.ts          # Server entry point
    └── package.json      # Backend dependencies
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB installed and running
- Git

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

### Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   The backend API will be available at `http://localhost:3000`

## 🔧 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Backend
- `npm run dev` - Start development server with hot-reload
- `npm run test` - Run tests (to be implemented)

## 🌐 API Routes

The backend provides the following API endpoints (to be documented based on your implementation):

- `/api/auth/*` - Authentication routes
- `/api/users/*` - User management routes
- Additional routes based on your specific implementation

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.
